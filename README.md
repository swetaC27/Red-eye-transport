 # RedEye Next


User Stories

System Admin
1)	As a system admin, he will be able to add a driver.
2)	As a system admin, he will be able to delete a driver.
3)	As a system admin, he will prepare weekly schedules.
4)	As a system admin, he will receive notifications from driver/passenger about trip issues.


Passenger
1)	As a passenger, he will be verified as a valid user in the system on first login.
2)	As a passenger, he will be able to book a ride.
3)	As a passenger, he will be able to cancel a ride.
4)	As a passenger, he will be able to view his trip history.
5)	As a passenger, he will be able to view his current upcoming ride details- Driver details, cab details and time.
6)	As a passenger, he will be able to access emergency services. (NUPD #, Transloc Supervisor #)

Driver
1)	As a driver, he will be able to login in into the system to view his details.
2)	As a driver, he will be able to provide his shift details.
3)	As a driver, he should be able to view student’s detail’s registered under him i.e. Name, NUID (trip details)
4)	As a driver, he should be able to update the No Show Status, If a student misses the redeye. 
5)	As a driver, he should be able to update the status, as he dropped the student at the drop location
6)	As a driver, he should be able to view navigations for all the students to be dropped and total time would it take to complete the trip 
7)	As a driver, he should be able to update trip status, if he’s on the way/ reached pickup location
8)	As a driver, he should be able to notify the system admin about any delays in case of reallocation of drivers.
9)	As a passenger, he will be able to access emergency services. (NUPD #, Transloc Supervisor #)

System Level Services

1)	The system will provide perform user authentication
2)	The system will perform shortest path algorithm to the driver in order to guide the driver to complete the trip (Route to be taken)
3)	If a particular passenger misses the trip he will be allocated in the next cab slot in case of vacancy. In case no immediate slot is available, the passenger will need to rebook the ride.
4)	The system will notify the user that all cars are booked for a slot when the user tried to book a ride for a slot.
5)	The system will allow a mechanism to provide feedback by the user.		


# Functional Flow Block Diagram

![alt text](https://github.com/neu-mis-info6150-fall-2018/final-project-ninjacoders/blob/master/Redeye%20Functional%20Flow%20Block%20Diagram.svg)


# Class Diagram
![alt text](https://github.com/neu-mis-info6150-fall-2018/final-project-ninjacoders/blob/master/Red%20Eye%20Nxt%20(1).svg)
