import { Card } from 'react-bootstrap';
import React from 'react';
import { TbPhoneOff } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';

export default function ContactAddress(props) {
  return (
    <div>
      <h4 className="font2" style={{ marginLeft: '5vw', marginTop: '5vw' }}>
        Contact {'&'} Address
      </h4>
      <div className="border">
        <Card className="border-0  px-4 py-3">
          {props?.phone ? (
            <Card.Text>
              <a href={`tel:${props?.phone}`} className="text-decoration-none">
                📞 : {props.phone}
              </a>
              <br />
              {`Make a Call for food availability,
          price and delivery details.`}
            </Card.Text>
          ) : (
            <Card.Text>
              <TbPhoneOff size="20" /> Contact information not available.
            </Card.Text>
          )}
        </Card>

        {/* <h4 className="font2" style={{ marginLeft: '5vw', marginTop: '5vw' }}>
        Address
      </h4> */}
        <Card className="border-0 px-4 pb-3">
          <Card.Text>
            <GrMapLocation size='19'/>{' '}
            {props.address}
          </Card.Text>
        </Card>
      </div>
    </div>
  );
}
