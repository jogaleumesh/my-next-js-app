import MeetupList from "../components/meetups/MeetupList";

const DummyData = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
    address: "Test address 5,1234 Test City",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DummyData} />;
};

export default HomePage;
