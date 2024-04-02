'use server'

import { revalidateTag } from 'next/cache'
import { Snack } from './types'

const BASE_URL = 'http://localhost:8000/snacks';

export async function getSnacks() {
    const res = await fetch(BASE_URL,{ next: { tags: ['collection'] }})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json()
  }

export async function getSnack(id: Number) {
  const res = await fetch(BASE_URL + '/' + id,{ next: { tags: ['collection'] }})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  
  return res.json()
}

export async function createSnack(submitData: Snack) {
  
    const res = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: {
        'content-type': 'application/json'
      },
    });
 
    if(!res.ok) {
      throw new Error("Unable to create snack");
    }

    // need to fetch latest
    revalidateTag('snacks')
  }

  export async function deleteSnack(id: Number) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });

    if(!res.ok) {
      throw new Error("Unable to delete snack");
    }

    revalidateTag('snacks')
  }