
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { fetchDetailCourse } from './redux/action';

const Course = () => {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{ 
      dispatch(fetchDetailCourse(params.id));
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default Course