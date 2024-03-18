import { Fragment, useEffect, useState } from "react"
import './styles.css'
import { Button } from "../button/Button"
import axios from "axios"
import { InputSearch } from "../InputSearch/InputSearch"
export const ListActiviti = () => {

    const [data, setData] = useState()
    const [FilteredActivities, setFilteredActivities] = useState([])
    const [activities, setActivities] = useState([])

    const handleAdd = () => {
        axios('https://www.boredapi.com/api/activity')
        .then((res) => setData(res.data))
        .catch(error => console.error(error))
      }

   useEffect(() => {
    if(data){
        setActivities(prev => [...prev, data]);
    }
   },[data])
   
   const handleDelete = (activityToDelete) => {
    // Use filter() to create a new array without the activity to be deleted
    const updatedActivities = activities.filter(activity => activity.key !== activityToDelete.key);
    // update array activities
    setActivities(updatedActivities);
    };
   
    const handleDeleteAll = () => {
        // empty table
        setActivities([]);
    };

    return (
        <Fragment>
        <section className="inputSearch">
          <InputSearch activities={activities} setFilteredActivities={setFilteredActivities} />
          <Button hanldeClik={handleAdd} textButton={"Add Activity"} />
          <Button hanldeClik={handleDeleteAll} textButton={"Delete All"} />
        </section>
        {activities.length || FilteredActivities.length ? (
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Type</th>
                <th>Participants</th>
                <th>price</th>
                <th>link</th>
                <th>accessibility</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {FilteredActivities.map((activity) => (
                <tr key={activity.key}>
                  <td>{activity.activity}</td>
                  <td>{activity.type}</td>
                  <td>{activity.participants}</td>
                  <td>{activity.price}</td>
                  <td>{activity.link}</td>
                  <td>{activity.accessibility}</td>
                  <td><Button textButton="Del" hanldeClik={() => handleDelete(activity)} className="btnDelete"/></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span>No activity to show</span>
        )}
      </Fragment>
    )
}