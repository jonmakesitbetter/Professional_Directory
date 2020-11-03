import React from "react";

let allEmployees = [
    {
      "id": 1,
      "name": "Bill Lumbergh",
      "image": "https://anthonymychal.com/wp-content/uploads/2016/10/bill-lumbergh-gary-cole-office-space.jpg",
      "phone number": 4425557707,
      "occupation": "I.T. Department Manager"
    },
    {
      "id": 2,
      "name": "Peter Gibbons",
      "image": "https://screencrush.com/files/2013/08/Office-Space.jpg?w=980&q=75",
      "phone number": 2135558484,
      "occupation": "Software Engineer"
    },
    {
      "id": 3,
      "name": "Michael Bolton",
      "image": "https://www.austinchronicle.com/binary/f372/screens_feature2-1.jpg",
      "phone number": 2135557691,
      "occupation": "Software Engineer"
    },
    {
      "id": 4,
      "name": "Samir Nagheenanajar",
      "image": "https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/48000/1550779860-14111-1530/screen_shot_2017_08_02_at_93332_am_large.png",
      "phone number": 2135556556,
      "occupation": "Software Engineer"
    },
    {
      "id": 5,
      "name": "Milton Waddams",
      "image": "https://www.lifewisemd.com/wp-content/uploads/2019/10/Quit.jpg",
      "phone number": 2185554412,
      "occupation": "Software Engineer"
    },
    {
      "id": 6,
      "name": "Bob Slydell",
      "image": "https://movie-fanatic-res.cloudinary.com/iu/s--T4WWsvOy--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364991007/bob-slydell.jpg",
      "phone number": 3805554698,
      "occupation": "Efficiency Expert"
    },
    {
      "id": 7,
      "name": "Bob Porter",
      "image": "https://www.aveleyman.com/Gallery/2017/W/18498-27412-0.jpg",
      "phone number": 3805558872,
      "occupation": "Efficiency Expert"
    }
  ]

let filteredEmployees = allEmployees.filter(employee=> {
    const qStr = q.toLowerCase()
    const eName = employee.name.toLowerCase()
    return eName.includes(qStr)
});

export default Search;