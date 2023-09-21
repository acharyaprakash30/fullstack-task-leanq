import React from 'react';
import Card from './Card';

const UserCard = ({ item }) => {
  return (
    <Card>
      <h5 className=" tracking-tight font-bold text-pink">Name: {item?.username}</h5>
      <h5 className=" tracking-tight font-bold text-pink">Phone No: {item?.phone}</h5>
      <h5 className=" tracking-tight font-bold text-pink">Address: {item?.address.city}</h5>
    </Card>
  );
};

export default UserCard;
