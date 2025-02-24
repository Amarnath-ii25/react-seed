import React, { useState } from "react";
import { X, FileText, Sparkles, FlaskConical, Pencil, Share2, MoreVertical } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GrDocumentTime } from "react-icons/gr";
import { BsCapsulePill,  BsWindowPlus } from "react-icons/bs";
import { PiVirus, PiPulseBold , PiHeartbeat, PiSirenBold} from "react-icons/pi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";
import { LuCalendarCheck, LuAppWindow } from "react-icons/lu";
import { LiaClinicMedicalSolid } from "react-icons/lia";



const progressNotes = [
  { date: "January 21, 2025" },
  { date: "January 22, 2025" },
  { date: "January 23, 2025" },

];

const socialHistory = [
  { label: "Advance Directive", value: "Yes" },
  { label: "Alcohol", value: "Heavy" },
  { label: "Physical Activity", value: "Occasional" },
  { label: "Smoking", value: "Current someday smoker" },
  { label: "e-Cigarettes", value: "Current user of e-cigarettes" },
  { label: "Other Tobacco or Nicotine", value: "Yes" },
  { label: "Recreational Drugs", value: "Yes" }
];

const systems = [
  {
    category: "General/Constitutional",
    items: [
      "Change in appetite",
      "Chills",
      "Fatigue",
      "Fever",
    ],
  },
  {
    category: "Endocrine",
    items: [
      "Excessive sweating",
      "Excessive thirst",
      "Frequent urination",
    ],
  },
  {
    category: "Respiratory",
    items: [
      "Shortness of breath at rest",
      "Shortness of breath with exertion",
    ],
  },
  {
    category: "Cardiovascular",
    items: [
      "Chest pain at rest",
      "Chest pain with exertion",
    ],
  },
  {
    category: "Gastrointestinal",
    items: [
      "Abdominal pain",
      "Blood in stool",
      "Constipation",
      "Decreased appetite",
    ],
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


const Progress = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAISuggestionIndex, setSelectedAISuggestionIndex] = useState(null); 

  return (
    <div className="lg:w-[55%] w-full h-screen bg-black flex justify-center items-center p-[5px]">
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
          <button className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
         
      <div className="w-16 bg-white flex flex-col items-center lg:py-4 py-0  lg:gap-6 gap-4 border-r shadow-lg ">
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
            <h2 className="lg:text-lg text-[60%] lg:pt-0 pt-5 lg:pl-0 pl-1 font-semibold border-b pb-2">Progress Note</h2>
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
            <h2 className="text-lg font-semibold">Progress Note</h2>
            <div className="flex gap-3">
              <button className="text-gray-600 hover:text-gray-900">
                <Pencil size={20} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Share2 size={20} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
            <p className="text-sm text-gray-500 border-b py-2">
              {selectedIndex !== null ? progressNotes[selectedIndex].date : "Select a note"} • Unlocked • No Signatures • No Addendums
            </p>
            <div className="flex-1 overflow-y-auto mt-2  no-scrollbar">
              <div className="mt-4">
                <p className="text-gray-500 text-sm">Appointment Type</p>
                <h3 className="text-black font-medium">In Person</h3>
              </div>

              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Chief Complaint/Reason for Visit*</p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li><span className="text-black font-semibold">Shortness of Breath</span></li>
                </ul>
              </div>
              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Uploaded Images</p>
                <h3 className="text-black font-medium">None</h3>
              </div>
              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">History of Present Illness</p>
                <h3 className="text-black font-medium">None</h3>
              </div>
              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Past Medical History</p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li><span className="text-black font-semibold">Abnormal Pain</span></li>
                </ul>
              </div>
              <div className="mt-4 border-b">
                <h3 className="text-gray-500 text-sm">Medications</h3>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li><span className="text-black font-semibold font-medium">Pantoprazole Sodium Powder</span></li>
                  <span className="text-xs text-gray-500">Once</span>
                  <li><span className="text-black font-semibold">Dolobid Oral Tablet</span></li>
                  <span className="text-xs text-gray-500">Twice</span>
                  <li><span className="text-black font-semibold">Delestrogen Intramuscular Oil (20 MG)</span></li>
                  <span className="text-xs text-gray-500">Twice</span>
                </ul>
              </div>
              <div className="mt-4 border-b">
                <h3 className="text-gray-500 text-sm">Allergies</h3>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li><span className="text-black font-semibold">Dust Mite Ext</span></li>
                  <li><span className="text-black font-semibold">Pollen Ext</span></li>
                </ul>
              </div>
              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Past Surgical History</p>
                <h3 className="text-black font-medium">None</h3>
              </div>

              

<div className="mt-4 border-b">
    <p className="text-gray-500 text-sm">Social History*</p>
    {socialHistory.map((item, index) => (
      <h3 className="text-black" key={index}>
        {item.label}? <span className="font-medium">{item.value}</span>
      </h3>
    ))}
  </div>

              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Mental Well-being</p>
                <h3 className="text-black">Low engagement or pleasure:<span className="font-medium">Several Dates</span></h3>
                <h3 className="text-black">Depressed, down or hopeless: <span className="font-medium">Several days</span></h3>
              </div>

              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Preferred Pharmacy</p>
                <h3 className="text-black font-medium">New York, NY, USA</h3>
              </div>

              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Health Related Behavior</p>
                <h3 className="text-black font-medium">None</h3>
              </div> 

              <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Health Related Behavior</p>
                <h3 className="text-black font-medium">None</h3>
              </div> 

      <div className="mt-4 border-b">
      <p className="text-gray-500 text-sm">Review of Systems (ROS)*</p>
      <ul className="list-disc pl-5">
        {systems.map((system, index) => (
          <li key={index} className="border-b pb-2 mb-2">
            <h3 className="font-semibold">{system.category}</h3>
            <ul className="pl-5">
              {system.items.map((item, idx) => (
                <li key={idx}>Denies {item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-4 border-b">
      <h2 className="text-gray-500 text-sm">Physical Examination</h2>
      <ul>
        {reportData.map((item, index) => (
          <li key={index} className="mb-3">
            <span className="font-medium block">{item.category}</span>
            <span>{item.details}</span>
          </li>
        ))}
      </ul>
    </div>

    
    <div className="mt-4 border-b">
                <p className="text-gray-500 text-sm">Vitals</p>
                <h3 className="text-black font-medium">None</h3>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
