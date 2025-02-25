import React, { useState } from "react";
import { X, FileText, Sparkles, FlaskConical, Pencil, Share2, MoreVertical } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GrDocumentTime } from "react-icons/gr";
import { BsCapsulePill, BsWindowPlus } from "react-icons/bs";
import { PiVirus, PiPulseBold, PiHeartbeat, PiSirenBold } from "react-icons/pi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";
import { LuCalendarCheck, LuAppWindow } from "react-icons/lu";
import { LiaClinicMedicalSolid } from "react-icons/lia";

const progressNotes = [
  { date: "January 21, 2025" },
  { date: "December 12, 2024" },
  { date: "Aug 2, 2024" },
];

const socialHistory = [
  { label: "Advance Directive", value: "Yes" },
  { label: "Alcohol", value: "Heavy" },
  { label: "Physical Activity", value: "Occasional" },
  { label: "Smoking", value: "Current someday smoker" },
  { label: "e-Cigarettes", value: "Current user of e-cigarettes" },
  { label: "Other Tobacco or Nicotine", value: "Yes" },
  { label: "Recreational Drugs", value: "Yes" },
];

const reviewofSystems = [
  {
    category: "General/Constitutional",
    items: ["Change in appetite", "Chills", "Fatigue", "Fever"],
  },
  {
    category: "Endocrine",
    items: ["Excessive sweating", "Excessive thirst", "Frequent urination"],
  },
  {
    category: "Respiratory",
    items: ["Shortness of breath at rest", "Shortness of breath with exertion"],
  },
  {
    category: "Cardiovascular",
    items: ["Chest pain at rest", "Chest pain with exertion"],
  },
  {
    category: "Gastrointestinal",
    items: ["Abdominal pain", "Blood in stool", "Constipation", "Decreased appetite"],
  },
];

const reportData = [
  { category: "General Appearance", details: "Pleasant, In No Acute Distress" },
  { category: "Head", details: "Normocephalic, Atraumatic" },
  { category: "Eyes", details: "Extra Ocular Movements Intact (EOMI)" },
  { category: "Ears", details: "Tympanic Membrane Intact, Clear" },
  { category: "Throat", details: "Clear" },
  { category: "Neck/Thyroid", details: "Neck Supple, Full Range Of Motion" },
  { category: "Lymph Nodes", details: "No Lymphadenopathy" },
  { category: "Skin", details: "No Rashes, No Suspicious Lesions" },
  { category: "Heart", details: "Regular Rate And Rhythm, S1,S2 Normal, No Murmurs, No Clicks, No Rubs" },
  { category: "Breasts", details: "Not Examined" },
  { category: "Abdomen", details: "Soft, Nontender, Nondistended, Bowel Sounds Present, No Hepatosplenomegaly" },
  { category: "Back", details: "Normal Exam Of Spine" },
  { category: "Musculoskeletal", details: "No Swelling Or Deformity" },
  { category: "Extremities", details: "No Clubbing, Cyanosis, Or Edema" },
  { category: "Peripheral Pulses", details: "Normal" },
  { category: "Neurologic", details: "Alert And Oriented, Cranial Nerves 2-12 Intact" },
  { category: "Psych", details: "Mood/Affect Full Range" },
];


const ProgresSection = ({ setIsProgressVisible, setIsFullScreen }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAISuggestionIndex, setSelectedAISuggestionIndex] = useState(null);
  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center p-[5px]">
     
        <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col">
          <div className="w-full bg-white-100 p-4 flex items-center justify-between rounded-t-2xl border-b">
            <div className="flex items-center gap-3">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-man-with-black-hair-image_2914331.jpg"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-sm font-semibold">John Doe</h2>
                <p className="text-xs text-gray-500">MRN: 8391877</p>
              </div>
            </div>
           
            <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => {
              setIsProgressVisible(false);
              setIsFullScreen(true); 
            }}
          >
            <X size={20} />
          </button>

          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className="w-16 bg-white flex flex-col items-center lg:py-4 py-0 lg:gap-6 gap-1.5 border-r shadow-lg ">
              <button className="text-black hover:text-gray-800"><CgProfile size={22} /></button>
              <button className="text-black hover:text-gray-800"><HiOutlineDocumentText size={22} /></button>
              <button className="text-black hover:text-gray-800"><GrDocumentTime size={22} /></button>
              <button className="text-black hover:text-gray-800"><FlaskConical size={22} /></button>
              <button className="text-black hover:text-gray-800"><BsCapsulePill size={22} /></button>
              <button className="text-black hover:text-gray-800"><PiVirus size={22} /></button>
              <button className="text-black hover:text-gray-800"><FaRegSquarePlus size={22} /></button>
              <button className="text-black hover:text-gray-800"><PiPulseBold size={22} /></button>
              <button className="text-black hover:text-gray-800"><GiScalpel size={22} /></button>
              <button className="text-black hover:text-gray-800"><LuCalendarCheck size={22} /></button>
              <button className="text-black hover:text-gray-800"><LiaClinicMedicalSolid size={22} /></button>
              <button className="text-black hover:text-gray-800"><BsWindowPlus size={22} /></button>
              <button className="text-black hover:text-gray-800"><PiHeartbeat size={22} /></button>
              <button className="text-black hover:text-gray-800"><PiSirenBold size={22} /></button>
              <button className="text-black hover:text-gray-800"><LuAppWindow size={22} /></button>
            </div>

            <div className="lg:w-1/4 w-[50px] bg-white-100 lg:p-4 flex flex-col gap-5 border-r">
              <h2 className="lg:text-xl text-[40%] lg:pt-0 pt-5 lg:pl-0 pl-1 font-semibold border-b pb-2">Progress<span className="ml-1 mr-1">Note</span></h2>
              <div className="flex-1 mt-4 overflow-y-auto no-scrollbar">
                {progressNotes.map((note, index) => (
                  <div key={index}>
                    <p className="lg:text-sm text-xs lg:block hidden text-gray-500">{note.date}</p>
                    <button
                      className={`flex items-center gap-2 px-3 py-2 rounded-md w-full mt-2 ${
                        selectedIndex === index ? "bg-blue-100 text-blue-500" : "text-black"
                      }`}
                      onClick={() => {
                        setSelectedIndex(index);
                        setSelectedAISuggestionIndex(null);
                      }}
                    >
                      <FileText size={18} /> <div className="text-xs lg:text-lg lg:block hidden">Progress Note</div>
                    </button>
                    <button
                      className={`flex items-center lg:gap-2 px-3 py-2 w-full ${
                        selectedAISuggestionIndex === index ? "text-blue-600" : "text-black hover:text-blue-600"
                      }`}
                      onClick={() => {
                        setSelectedAISuggestionIndex(index);
                        setSelectedIndex(null);
                      }}
                    >
                      <Sparkles size={18} /> <div className="text-xs lg:text-lg lg:block hidden">AI Suggestions</div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-3/4 p-4 flex flex-col overflow-hidden">
              <div className="flex justify-between items-center">
                <h2 className="lg:text-xl text-xs font-semibold ">Progress<span className="ml-1">Note</span></h2>
                <div className="flex lg:gap-3 lg:ml-0 ml-2">
                  <button className="text-gray-600 hover:text-gray-900">
                    <Pencil className="lg:w-10 w-3" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Share2 className="lg:w-10 w-3" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <MoreVertical className="lg:w-10 w-3" />
                  </button>
                </div>
              </div>
              <p className="lg:text-sm text-xs text-gray-500 border-b py-2">
                {selectedIndex !== null ? progressNotes[selectedIndex].date : "Select a note"} • Unlocked • No Signatures • No Addendums
              </p>
              <div className="flex-1 overflow-y-auto mt-2 no-scrollbar">
                <div className="mt-4">
                  <p className="text-gray-500 lg:text-sm text-xs">Appointment Type</p>
                  <h3 className="font-medium block lg:text-base text-xs">In Person</h3>
                </div>
                
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-sm text-xs">Chief Complaint/Reason for Visit*</p>
                  <ul className="text-gray-600 lg:text-sm text-xs list-disc list-inside">
                    <li><span className="text-black font-medium lg:text-base text-xs">Shortness of Breath</span></li>
                  </ul>
                </div>



                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-sm text-xs">Uploaded Images</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-sm text-xs">History of Present Illness</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-sm text-xs">Past Medical History</p>
                  <ul className="text-gray-600 lg:text-sm text-xs list-disc list-inside">
                    <li><span className="text-black font-medium lg:text-base text-xs">Abnormal Pain</span></li>
                  </ul>
                </div>
                <div className="mt-4 border-b">
                  <h3 className="text-gray-500 lg:text-sm text-xs">Medications</h3>
                  <ul className="text-gray-600 text-sm list-disc list-inside mt-3">
                    <li>
                      <span className="text-black font-medium lg:text-base text-xs">Pantoprazole Sodium Powder</span>
                      <ul className="list-none ml-6">
                        <li className="text-gray-500 lg:text-base text-xs">Once</li>
                      </ul>
                    </li>
                    <li className="mt-2">
                      <span className="text-black font-medium lg:text-base text-xs">Dolobid Oral Tablet</span>
                      <ul className="list-none ml-6">
                        <li className="text-gray-500 lg:text-base text-xs">Twice</li>
                      </ul>
                    </li>
                    <li className="mt-3">
                      <span className="text-black font-medium lg:text-base text-xs">Delestrogen Intramuscular Oil (20 MG)</span>
                      <ul className="list-none ml-6">
                        <li className="text-gray-500 lg:text-base text-xs">Twice</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 border-b">
                  <h3 className="text-gray-500 lg:text-base text-xs">Allergies</h3>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li><span className="text-black font-medium lg:text-base text-xs">Dust Mite Ext</span></li>
                    <li><span className="text-black font-medium lg:text-base text-xs">Pollen Ext</span></li>
                  </ul>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Past Surgical History</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Social History*</p>
                  {socialHistory.map((item, index) => (
                    <h3 className="text-black lg:text-base text-xs" key={index}>
                      {item.label}? <span className="lg:text-base text-xs ">{item.value}</span>
                    </h3>
                  ))}
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Mental Well-being</p>
                  <h3 className="text-black lg:text-base text-xs">Low engagement or pleasure:<span className="lg:text-base text-xs">Several Dates</span></h3>
                  <h3 className="text-black lg:text-base text-xs">Depressed, down or hopeless: <span className="lg:text-base text-xs">Several days</span></h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Preferred Pharmacy</p>
                  <h3 className="font-medium block lg:text-base text-xs">New York, NY, USA</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Health Related Behavior</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Health Related Behavior</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 lg:text-base text-xs">Review of reviewofSystems (ROS)*</p>
                  <ul className="list-disc pl-5">
                    {reviewofSystems.map((system, index) => (
                      <li key={index} className="border-b pb-2 mb-2">
                        <h3 className="font-semibold lg:text-base text-xs">{system.category}</h3>
                        <ul className="pl-5">
                          {system.items.map((item, idx) => (
                            <li key={idx} className="lg:text-base text-xs">Denies {item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 border-b">
                  <h2 className="text-gray-500 lg:text-base text-xs">Physical Examination</h2>
                  <ul>
                    {reportData.map((item, index) => (
                      <li key={index} className="mb-3">
                        <span className="font-medium block lg:text-base text-xs">{item.category}</span>
                        <span className='lg:text-base text-xs'>{item.details}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Vitals</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Labs</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Studies/Radiology/Pap Results</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Diagnosis</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
                <div className="mt-4 border-b">
                  <p className="text-gray-500 lg:text-base text-xs">Tests</p>
                  <h3 className="font-medium block lg:text-base text-xs">None</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProgresSection;