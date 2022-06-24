import React, { useEffect, useState } from 'react';
import CardTotalAmount from 'renderer/components/molecules/cardTotalAmount/CardTotalAmount';
import styles from './WidgetTotals.module.scss';

const WidgetTotals = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);

  const fetchData = async (): Promise<void> => {
    const urlClients = 'http://localhost:3000/clients/getTotal';
    const urlCourses = 'http://localhost:3000/courses/getTotal';
    const urlTeachers = 'http://localhost:3000/teachers/getTotal';
    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFiODA0YmY0MGVmN2NiMGQ1NmE3NWIiLCJpYXQiOjE2NTYwNzkxODksImV4cCI6MTY1NjEyMjM4OX0.gN-j6tRMoC7A6lV0908hr3z8lUABYBF2cgpoy5g3lY0';
    const parameters = {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'auth-token': authToken,
      },
      method: 'GET',
    };

    try {
      await fetch(urlClients, parameters)
        .then((response) => response.json())
        .then((result) => {
          setTotalClients(result.total);
          return result;
        });

      await fetch(urlCourses, parameters)
        .then((response) => response.json())
        .then((result) => {
          setTotalCourses(result.total);
          return result;
        });

      await fetch(urlTeachers, parameters)
        .then((response) => response.json())
        .then((result) => {
          setTotalTeachers(result.total);
          return result;
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CardTotalAmount title="Clients" total={totalClients} />
      <CardTotalAmount title="Courses" total={totalCourses} />
      <CardTotalAmount title="Teachers" total={totalTeachers} />
    </>
  );
};

export default WidgetTotals;
