import React, { useState, useEffect, useCallback } from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';
import axios from 'axios';
import { placeByIdUrl } from '../../reducers/URLs';
import { Card, Row, Col } from 'react-bootstrap';

function splitAddress(address){
  address=address.split(',');
  // console.log(address);
  let t=address[address.length-2].replace('^(?=.*[0-9])$','');
  address=t+','+address[address.length-1];
  return address;
}

export default function TopRated(props) {
  const [cloudData, setCloudData] = useState([]);
  // const [APIData, setAPIData] = useState([]);

  // const autoRetryFetch = async (id, index) => {
  //   console.log('AutoRetryFetch');
  //   await axios
  //     .get(placeByIdUrl(id))
  //     .then((res) => {
  //       const data = res.data.results[0];
  //       // console.log(index);
  //       // console.log(data.id, cloudData[index].id);
  //       setAPIData((old) => {
  //         const t = old;
  //         t[index] = data;
  //         return t;
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       autoRetryFetch(id, index);
  //     });
  // };

  const fetchTopRated = (state) => {
    const collectionRef = collection(db, 'restaurants');
    const q =
      props.state == 'India'
        ? query(collectionRef, orderBy('ratings.star', 'desc'), limit(10))
        : query(
            collectionRef,
            where('address.state', '==', state),
            orderBy('ratings.star', 'desc'),
            limit(10)
          );

    getDocs(q)
      .then((res) => {
        // console.log('fetching firestore');
        // setAPIData([]);
        setCloudData([]);
        res.docs.map((doc, index) => {
          setCloudData((old) => {
            const t = old;
            t[index] = { id: doc.id, data: doc.data() };
            return t;
          });
          // autoRetryFetch(doc.id, index);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    console.log(props.state, cloudData);
    fetchTopRated(props.state);
  }, [props.state]);

  return (
    <>
      <>
        {cloudData?.map((item, index) => {
          return (
            <Card key={index} style={{marginLeft:'4vw', marginRight:'4vw'}} className='mt-4 p-2'>
              <Row className='list-unstyled'>
                <li style={{width:'20%'}}>
                <img src={props?.numImg[index]?.url} className="border-0" style={{width:'40px', height:'90px', objectFit:'cover'}}/>
                </li>
                <li style={{width:'80%'}}>
                  <Card.Title className='mb-1'>
                    {item?.data?.name}
                  </Card.Title>
                  <Card.Text style={{fontSize:'80%'}}>
                    {item?.data?.address?.full}
                    {splitAddress(item?.data?.address?.full)}
                    </Card.Text>
                </li>
              </Row>
            </Card>
          );
        })}
      </>
    </>
  );
}
