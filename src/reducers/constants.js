import { db } from '../configs/firebaseConfig';
import { doc } from 'firebase/firestore';
import API_KEY from './API_KEY';
import axios from 'axios';
import React, { useState } from 'react';
import {AppState} from './AppContext';

export function restoDocRef(id) {
  return doc(db, 'restaurants', id);
}

export functi