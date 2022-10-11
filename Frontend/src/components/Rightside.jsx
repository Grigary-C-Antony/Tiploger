import React from "react";
import { FaCog, FaSearch } from "react-icons/fa";
import Linkify from "react-linkify";
function Rightside(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  let imgdata = [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/203",
    "https://picsum.photos/204",
    "https://picsum.photos/205",
  ];
  //   let imgdata;
  const componentDecorator = (href, text, key) => (
    <a href={href} className="text-green-700" key={key} target="_blank">
      {text}
    </a>
  );
  return (
    <div
      onClick={() => {
        setModalVisible(false);
      }}
      className="my-5 sm:w-full md:w-3/4 absolute right-0 bg-white"
    >
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
          onClick={() => {
            setModalVisible(true);
          }}
        >
          <FaCog color="#444444" className="h-7 w-7" />
        </div>
        <div
          //   style={{ backgroundColor: "#202850"}}
          className="h-12 w-12 ml-9 gradientUserIcon rounded-xl"
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
        <div className="flex flex-row mt-5 mx-14">
          <div className="items-center mr-14 ">
            <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
              <img
                src="https://avatars.dicebear.com/api/identicon/4.png"
                className="p-2"
              />
            </div>
          </div>
          <div>
            <div className="text-green-700 text-xl font-bold">
              Slightly domed and divided
            </div>
            <div>
              <Linkify componentDecorator={componentDecorator}>
                <div className="text-gray-800 text-lg font-medium text-justify">
                  One morning, when Gregor Samsa woke from troubled dreams,he
                  found himself transformed in his bed into a horrible vermin he
                  lay on his armour-like back
                  https://www.figma.com/file/8iG0rTui5VbpmyOQMcMadu/Untitled?node-id=1%3A55
                </div>
              </Linkify>
              <div className=" flex flex-row overflow-x-auto m-3">
                {imgdata &&
                  imgdata.map((e, i) => {
                    return (
                      <img
                        className="h-32 w-32  mx-2 rounded-xl"
                        key={i}
                        src={e}
                        alt=""
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-row">
              <div
                style={{
                  backgroundColor: "#FFB4B4",
                }}
                className="w-fit flex flex-row px-3 py-1 mx-2 rounded-lg"
              >
                <div className="text-base">❤️</div>
                <div
                  style={{
                    color: "#852222",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  65
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#D0CCFF",
                }}
                className="w-fit flex flex-row px-3 py-1 mx-2 rounded-lg"
              >
                <div className="text-base">🤖</div>
                <div
                  style={{
                    color: "#4B42B0",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  26
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#D9F1BA",
                }}
                className="w-fit flex flex-row px-3 py-1 mx-2 rounded-lg"
              >
                <div className="text-base">🌏</div>
                <div
                  style={{
                    color: "#577235",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  128
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#FFF8B6",
                }}
                className="w-fit flex flex-row px-3 py-1 mx-2 rounded-lg"
              >
                <div className="text-base">👍</div>
                <div
                  style={{
                    color: "#867C24",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  2
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5 mx-14">
          <div className="items-center mr-14 ">
            <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
              <img
                src="https://avatars.dicebear.com/api/identicon/1.png"
                className="p-2"
              />
            </div>
          </div>
          <div>
            <div className="text-amber-500 text-xl font-bold">
              Arches into stiff
            </div>
            <div className="text-gray-800 text-lg font-medium text-justify">
              He bedding was hardly able to cover it and seemed ready to slide
              off any moment. His many legs, pitifully thin compared with the
              size of the rest of him, waved about helplessly as he looked.
              "What's happened to me?" he thought. It wasn't a dream. His room,
              a proper human room although a little too small, lay peacefully
              between its four familiar walls. A collection of textile samples
              lay spread out on the table - Samsa was a travelling salesman -
              and above it there hung a picture that he had rece
            </div>
            <div className="flex flex-row">
              <div className="bg-red-400 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">👍</div>
                <div className="text-gray-200 text-base font-medium">18</div>
              </div>
              <div className="bg-green-700 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">⚙️</div>
                <div className="text-gray-200 text-base font-medium">12</div>
              </div>
              <div className="bg-cyan-600 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">❤️</div>
                <div className="text-gray-200 text-base font-medium">54</div>
              </div>
              <div className="bg-amber-500 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">🖼️</div>
                <div className="text-gray-200 text-base font-medium">29</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5 mx-14">
          <div className="items-center mr-14 ">
            <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
              <img
                src="https://avatars.dicebear.com/api/identicon/3.png"
                className="p-2"
              />
            </div>
          </div>
          <div>
            <div className="text-red-600 text-xl font-bold">
              Wonderful serenity has taken
            </div>
            <div className="text-gray-800 text-lg font-medium text-justify">
              I enjoy with my whole heart. I am alone, and feel the charm of
              existence in this spot, which was created for the bliss of souls
              like mine. I am so happy, my dear friend, so absorbed in the
              exquisite sense of mere tranquil existence, that I neglect my
              talents. I should be incapable of drawing a single stroke at the
              present moment; and yet I feel that I never was a greater artist
              than now. When, while the lovely valley teems with vapour around
              me, and the meridian sun strikes th
            </div>
            <div className="flex flex-row">
              <div className="bg-red-400 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">👍</div>
                <div className="text-gray-200 text-base font-medium">18</div>
              </div>
              <div className="bg-green-700 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">⚙️</div>
                <div className="text-gray-200 text-base font-medium">12</div>
              </div>
              <div className="bg-cyan-600 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">❤️</div>
                <div className="text-gray-200 text-base font-medium">54</div>
              </div>
              <div className="bg-amber-500 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">🖼️</div>
                <div className="text-gray-200 text-base font-medium">29</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5 mx-14">
          <div className="items-center mr-14 ">
            <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
              <img
                src="https://avatars.dicebear.com/api/identicon/4.png"
                className="p-2"
              />
            </div>
          </div>
          <div>
            <div className="text-green-700 text-xl font-bold">
              Slightly domed and divided
            </div>
            <div className="text-gray-800 text-lg font-medium text-justify">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin he lay on
              his armour-like back
            </div>
            <div className="flex flex-row">
              <div className="bg-red-400 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">👍</div>
                <div className="text-gray-200 text-base font-medium">65</div>
              </div>
              <div className="bg-green-700 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">⚙️</div>
                <div className="text-gray-200 text-base font-medium">28</div>
              </div>
              <div className="bg-cyan-600 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">❤️</div>
                <div className="text-gray-200 text-base font-medium">12</div>
              </div>
              <div className="bg-amber-500 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">🖼️</div>
                <div className="text-gray-200 text-base font-medium">16</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5 mx-14">
          <div className="items-center mr-14 ">
            <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
              <img
                src="https://avatars.dicebear.com/api/identicon/1.png"
                className="p-2"
              />
            </div>
          </div>
          <div>
            <div className="text-amber-500 text-xl font-bold">
              Arches into stiff
            </div>
            <div className="text-gray-800 text-lg font-medium text-justify">
              He bedding was hardly able to cover it and seemed ready to slide
              off any moment. His many legs, pitifully thin compared with the
              size of the rest of him, waved about helplessly as he looked.
              "What's happened to me?" he thought. It wasn't a dream. His room,
              a proper human room although a little too small, lay peacefully
              between its four familiar walls. A collection of textile samples
              lay spread out on the table - Samsa was a travelling salesman -
              and above it there hung a picture that he had rece
            </div>
            <div className="flex flex-row">
              <div className="bg-red-400 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">👍</div>
                <div className="text-gray-200 text-base font-medium">18</div>
              </div>
              <div className="bg-green-700 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">⚙️</div>
                <div className="text-gray-200 text-base font-medium">12</div>
              </div>
              <div className="bg-cyan-600 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">❤️</div>
                <div className="text-gray-200 text-base font-medium">54</div>
              </div>
              <div className="bg-amber-500 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">🖼️</div>
                <div className="text-gray-200 text-base font-medium">29</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5 mx-14">
          <div className="items-center mr-14 ">
            <div className="w-10 h-10 mt-5 gradientUserIcon rounded-xl">
              <img
                src="https://avatars.dicebear.com/api/identicon/3.png"
                className="p-2"
              />
            </div>
          </div>
          <div>
            <div className="text-red-600 text-xl font-bold">
              Wonderful serenity has taken
            </div>
            <div className="text-gray-800 text-lg font-medium text-justify">
              I enjoy with my whole heart. I am alone, and feel the charm of
              existence in this spot, which was created for the bliss of souls
              like mine. I am so happy, my dear friend, so absorbed in the
              exquisite sense of mere tranquil existence, that I neglect my
              talents. I should be incapable of drawing a single stroke at the
              present moment; and yet I feel that I never was a greater artist
              than now. When, while the lovely valley teems with vapour around
              me, and the meridian sun strikes th
            </div>
            <div className="flex flex-row">
              <div className="bg-red-400 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">👍</div>
                <div className="text-gray-200 text-base font-medium">18</div>
              </div>
              <div className="bg-green-700 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">⚙️</div>
                <div className="text-gray-200 text-base font-medium">12</div>
              </div>
              <div className="bg-cyan-600 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">❤️</div>
                <div className="text-gray-200 text-base font-medium">54</div>
              </div>
              <div className="bg-amber-500 w-fit flex flex-row px-3 py-1 mx-2 rounded-lg">
                <div className="text-base">🖼️</div>
                <div className="text-gray-200 text-base font-medium">29</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightside;
