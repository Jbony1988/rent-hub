import React from 'react';
import Link from 'next/link';


const PropertyPage = () => {
    console.log('hello');
  return (
    <div>
    <h1 className="text-3xl">Properties</h1>
    <Link href="/">Home Page</Link>

  </div>
  )
}

export default PropertyPage