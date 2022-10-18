import React from "react";
import "../index.css";
import { FaPlus } from "react-icons/fa";

function Leftside(props) {
  let text1 =
    "He bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of            the rest of him, waved about helplessly as he looked. Whats            happened to me? he thought. It wasnt a dream. His room, a proper            human room although a little too small, lay peacefully between its            four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had re";
  let title1 = "Arches into stiff Arches into stiff";
  let text2 =
    "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin he lay on his armour-like back";
  return (
    <div className="flex-1 bg-white flex flex-col justify-between  border h-screen w-1/4 fixed">
      <div className="flex flex-col">
        <div className="mt-5">
          <span className="text-black text-xl ml-2 font-bold">
            Editors Choice
          </span>
          <div className="flex justify-center mt-3">
            <div
              className="w-11/12 h-30 rounded-xl px-4 py-3 "
              style={{ boxShadow: "4px 4px 20px rgb(0,0,0,0.25)" }}
            >
              <div className="text-amber-500 text-sm font-bold">
                {title1 &&
                  (title1.length > 25
                    ? `${title1.substring(0, 20)}...`
                    : title1)}
              </div>
              <div className="text-gray-800 text-sm font-medium text-justify">
                {text1 &&
                  (text1.length > 100
                    ? `${text1.substring(0, 100)}...`
                    : text1)}
              </div>
            </div>
          </div>
          <span className="text-gray-800 flex justify-end mx-5 mt-3 text-sm font-bold">
            More
          </span>
        </div>
        <div className="mt-5">
          <span className="text-black text-xl ml-2 font-bold">My Tips</span>
          <div className="flex justify-center mt-3">
            <div
              className="w-11/12 h-30 rounded-xl px-4 py-3 "
              style={{ boxShadow: "4px 4px 20px rgb(0,0,0,0.25)" }}
            >
              <div className="text-amber-500 text-sm font-bold">
                {title1 &&
                  (title1.length > 25
                    ? `${title1.substring(0, 20)}...`
                    : title1)}
              </div>
              <div className="text-gray-800 text-sm font-medium text-justify">
                {text2 &&
                  (text2.length > 100
                    ? `${text2.substring(0, 100)}...`
                    : text2)}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <div
              class="w-11/12 h-30 rounded-xl px-4 py-3 "
              style={{ boxShadow: "4px 4px 20px rgb(0,0,0,0.25)" }}
            >
              <div className="text-amber-500 text-sm font-bold">
                {title1 &&
                  (title1.length > 25
                    ? `${title1.substring(0, 20)}...`
                    : title1)}
              </div>
              <div className="text-gray-800 text-sm font-medium text-justify">
                {text1 &&
                  (text1.length > 100
                    ? `${text1.substring(0, 100)}...`
                    : text1)}
              </div>
            </div>
          </div>
          <span className="text-gray-800 flex justify-end mx-5 mt-3 text-sm font-bold">
            More
          </span>
        </div>
      </div>
      <div className="flex mb-5 justify-center">
        <div className="h-14 w-14 mr-9 flex bg-gray-400 rounded-lg items-center justify-center">
          <FaPlus className="h-8 w-8"></FaPlus>
        </div>
        <div>
          <div className="text-black text-lg font-bold">Add New Tips here</div>
          <div className="text-gray-600 text-base font-bold">
            Press Ctrl + &
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
