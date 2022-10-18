import React from "react";
import { FaCog, FaSearch, FaTimes } from "react-icons/fa";
import Linkify from "react-linkify";
import { nFormatter, headingColor, likeData } from "../configs/essential";

function Rightside(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [profileModal, setProfileModal] = React.useState(false);
  const [openImageViewer, setOpenImageViewer] = React.useState(null);

  let fullData = [
    {
      user: "user1",
      title: "Slightly domed and divided",
      content:
        " One morning, when Gregor Samsa woke from troubled dreams,he found himself transformed in his bed into a horrible vermin he lay on his armour-like back https://www.figma.com/file/8iG0rTui5VbpmyOQMcMadu/Untitled?node-id=1%3A55",
      imgdata: [
        "https://picsum.photos/200",
        "https://picsum.photos/201",
        "https://picsum.photos/203",
        "https://picsum.photos/204",
        "https://picsum.photos/205",
      ],
      like: [
        { item: "Tech", count: 10 },
        { item: "Process", count: 20 },
        { item: "Domain", count: 30 },
        { item: "Others", count: 40 },
      ],
    },
    {
      user: "user2",
      title: "Arches into stiff",
      content:
        "He bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What's happened to me? he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had rece",
      like: [
        { item: "Tech", count: 200 },
        { item: "Process", count: 100000000 },
        { item: "Domain", count: 40000 },
        { item: "Others", count: 3000 },
      ],
    },
    {
      user: "user2",
      title: "Wonderful serenity has taken",
      content:
        "I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes ",
      imgdata: [
        "https://picsum.photos/206",
        "https://picsum.photos/207",
        "https://picsum.photos/208",
      ],
      like: [
        { item: "Tech", count: 20 },
        { item: "Process", count: 10 },
        { item: "Domain", count: 40 },
        { item: "Others", count: 30 },
      ],
    },
    {
      user: "user3",
      title: "I am alone, and feel the charm of existence in this spot,",
      content:
        "created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never ",
      imgdata: [
        "https://picsum.photos/209",
        "https://picsum.photos/210",
        "https://picsum.photos/211",
        "https://picsum.photos/212",
        "https://picsum.photos/213",
        "https://picsum.photos/1920/1080",
      ],
    },
  ];

  const componentDecorator = (href, text, key) => (
    <a
      href={href}
      className="text-red-500 hover:opacity-70"
      key={key}
      target="_blank"
    >
      {text}
    </a>
  );

  return (
    <div className="my-5 sm:w-full md:w-3/4 absolute right-0 bg-white">
      {openImageViewer ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          className="flex justify-center items-center fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10"
        >
          <div className="h-full w-full flex items-center justify-center ">
            <FaTimes
              size={35}
              color={"white"}
              className="m-3 absolute top-10 right-10"
              onClick={() => {
                setOpenImageViewer(null);
              }}
            />
            <a
              href={openImageViewer}
              className="flex items-center w-1/2 justify-center"
              target="_blank"
            >
              <img className="" src={openImageViewer}></img>
            </a>
          </div>
        </div>
      ) : modalVisible ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          className="flex justify-center items-center fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10"
        >
          <div className="bg-white w-2/3 h-2/3 rounded-lg">
            <div>
              <FaTimes
                size={25}
                className="m-3"
                onClick={() => {
                  setModalVisible(false);
                }}
              />
            </div>
          </div>
        </div>
      ) : profileModal ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          className="flex justify-center items-center fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10"
        >
          <div className="bg-white w-2/3 h-2/3 rounded-lg">
            <div>
              <FaTimes
                size={25}
                className="m-3"
                onClick={() => {
                  setProfileModal(false);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-row items-center justify-center ">
        <div
          style={{ backgroundColor: "#E6E6E6" }}
          className="w-1/2 h-12 mx-9 rounded-xl flex items-center justify-around"
        >
          <FaSearch />
          <input
            style={{ outline: "none" }}
            className="w-10/12 h-12 text-xl font-medium bg-transparent border-transparent"
            type="text"
          />
        </div>
        <div
          className=" hover:opacity-60 cursor-pointer"
          onClick={() => {
            setModalVisible(true);
            // setOpenImageViewer(true);
          }}
        >
          <FaCog color="#444444" className="h-7 w-7" />
        </div>
        <div
          //   style={{ backgroundColor: "#202850"}}
          className="h-12 w-12 ml-9 gradientUserIcon rounded-xl hover:opacity-60 cursor-pointer"
          onClick={() => {
            setProfileModal(true);
          }}
        >
          <img
            src="https://avatars.dicebear.com/api/identicon/1.png"
            className="p-2"
          />
        </div>
      </div>

      <div className="flex flex-row mr-28 my-4 justify-center">
        <span
          style={{
            backgroundColor: "#D0CCFF",
            color: "#4B42B0",
            fontWeight: 700,
          }}
          className="text-base px-6 p-2 mx-2 rounded-lg"
        >
          Tech
        </span>
        <span
          style={{
            backgroundColor: "#D9F1BA",
            color: "#577235",
            fontWeight: 700,
          }}
          className="text-base px-6 p-2 mx-2 rounded-lg"
        >
          Process
        </span>
        <span
          style={{
            backgroundColor: "#FFB4B4",
            color: "#852222",
            fontWeight: 700,
          }}
          className="text-base px-6 p-2 mx-2 rounded-lg"
        >
          Domain
        </span>
        <span
          style={{
            backgroundColor: "#FFF8B6",
            color: "#867C24",
            fontWeight: 700,
          }}
          className="text-base px-6 p-2 mx-2 rounded-lg"
        >
          Others
        </span>
      </div>

      <div className="mt-5">
        {fullData?.map((element, index) => {
          return (
            <div key={index} className="flex flex-row mt-5 mx-14">
              <div className="items-center mr-14 ">
                <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
                  <img
                    src={`https://avatars.dicebear.com/api/identicon/${element.user}.png`}
                    className="p-2"
                  />
                </div>
              </div>
              <div>
                <div
                  className="text-xl font-bold"
                  style={{
                    color: headingColor(element?.like)
                      ? headingColor(element?.like).textColor
                      : "#000",
                  }}
                >
                  {element.title}
                </div>
                <div>
                  <Linkify componentDecorator={componentDecorator}>
                    <div className="text-gray-800 text-lg font-medium text-justify">
                      {element.content}
                    </div>
                  </Linkify>
                  <div className=" flex flex-row overflow-x-auto m-3">
                    {element?.imgdata?.map((e, i) => {
                      return (
                        <img
                          className="h-32 w-32 mx-2 rounded-xl hover:opacity-70"
                          key={i}
                          imgs={[{ src: e }]}
                          src={e}
                          alt=""
                          onClick={() => setOpenImageViewer(e)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row">
                  {likeData?.map((like, idx) => {
                    return (
                      <div
                        style={{
                          backgroundColor: like.color,
                        }}
                        className="w-fit flex flex-row px-3 py-1 mx-2 rounded-lg"
                      >
                        <div className="text-base">{like.icon}</div>
                        <div
                          style={{
                            color: like.textColor,
                            fontWeight: 700,
                            fontSize: "1rem",
                          }}
                        >
                          {nFormatter(
                            element.like?.filter((n) => n.item === like.item)[0]
                              .count
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <div className="h-10" />
      </div>
    </div>
  );
}

export default Rightside;
