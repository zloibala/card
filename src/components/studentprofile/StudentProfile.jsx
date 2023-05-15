import "./studentProfile.css";

const studentProfile = [
  {
    name: "Esma",
    src: "https://media.licdn.com/dms/image/D5603AQGB5Q4Dld9q4g/profile-displayphoto-shrink_800_800/0/1678567708673?e=1689206400&v=beta&t=caADOFgS3rbEBQ7TgVgrnANubfQiTYObVZuFktGwRKs",
    email: "boronova25@gmail.com",
    text: "Time goes by, but memories last forever.",
  },

  {
    name: "Alina",
    src: "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A1PA4115PT17X175Y0D181916177W7398H6467/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/powerpuff-girls-bubbles-petite-sac-en-tissu.jpg",
    email: "alinka@gamil.com",
    text: "Treat everyone with kindness and respect, regardless of their position or status in life.",
  },

  {
    name: "Shah",
    src: "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/16/tmp/buzzfeed-prod-web-06/18744028b408f907a59e0b9229fc85ef-8.jpg?downsize=900:*&output-format=auto&output-quality=auto",
    email: "shah@gamil.com",
    text: "The beginning is the most important part of the work.",
  },
  {
    name: "Aidina",
    src: "https://sketchok.com/images/articles/01-cartoons/058-powerpuff-girls/15/12.jpg",
    email: "aidina@gamil.com",
    text: "There is no end to education.",
  },
  {
    name: "Tink",
    src: "https://png.pngtree.com/png-clipart/20210225/ourlarge/pngtree-cute-cartoon-character-avatar-wearing-glasses-png-image_2940625.jpg",
    email: "tink@gamil.com",
    text: "Sleep more, live longer, and be happy.",
  },
  {
    name: "Murat",
    src: "https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-a-cartoon-character-1.jpg",
    email: "murat@gamil.com",
    text: " Don't buy an IOS. Window rules the world",
  },
  {
    name: "Tom",
    src: "https://static1.personality-database.com/profile_images/d844f586b5754e309a6bed9d12667873.png",
    email: "tom@gamil.com",
    text: "It's never too late to start a new beginning.",
  },
  {
    name: "Elnura",
    src: "https://media.istockphoto.com/id/1177151439/vector/cartoon-female-ninja-vector-illustration.jpg?s=612x612&w=0&k=20&c=IrvfVE1IGshw9aGTtvXfVbMbqke-ISp6okXiXnSep3k=",
    email: "elnura@gamil.com",
    text: "I know who you are but you will never know who i am....",
  },
];

const showInfo = studentProfile.map((student, index) => {
  return (
    <div className="card">
      <div>
        <img width="100x" src={student.src} key={index} />
      </div>
      <div>
        <ul>
          <li>Name: {student.name}</li>
          <li>Email: {student.email}</li>
          <li>Motto: {student.text}</li>
        </ul>
      </div>
      <button className="btn"> Get in Touch </button>
    </div>
  );
});

const StudentProfile = () => {
  return <div className="container">{showInfo}</div>;
};
export default StudentProfile;
