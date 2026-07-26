import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Check,
  Shield,
  GraduationCap,
  Briefcase,
  Rocket,
  Brain,
  Mic,
  TrendingUp,
  MessageCircle,
  Circle
} from "lucide-react"

function Onboarding() {
  const navigate = useNavigate()
  const [step,setStep] = useState(1)
  const [answers,setAnswers] = useState({style:"",role:"", goal:""})
  const speakingOptions = [
    {
      id:"A",
      text:"I'm naturally expressive and confident speaking with groups."
    },
    {
      id:"B",
      text:"I'm quiet but can still speak confidently to groups."
    },
    {
      id:"C",
      text:"I'm expressive but public speaking makes me nervous."
    },
    {id:"D",
      text:"I prefer staying quiet and struggle speaking in front of people."
    }
  ]
      
  const roleOptions = [
    {
      title:"Student",
      icon:<GraduationCap size={22}/>,
      description:"Presentation, Debates & School Life"
    },
    {
      title:"Job Seeker",
      icon:<Briefcase size={22}/>,
      description:"First Impression, Interviews & Pitches"
    },
    {
      title:"Early Career",
      icon:<Rocket size={22}/>,
      description:"Building executive presence"
    },
    {
      title:"Speech Anxiety",
      icon:<Brain size={22}/>,
      description:"Clarity, Confidence & Discovery"
    }
      
  ]
  const goalOptions = [
    {
      title:"Overcome fear of public speaking",
      icon:<Mic size={20}/>
    },
    {
      title:"Sound more confident and authoritative",
      icon:<TrendingUp size={20}/>
    },
    {
      title:"Engage and persuade audience better",
      icon:<MessageCircle size={20}/>
    },
    {
      title:"Improve clarity and reduce filler words",
      icon:<Circle size={20}/>
    }
  ]
      
  const nextStep = ()=>{
    if(step<3){
      setStep(step+1)
    }else{
      setStep(4)
    }
  }
  const prevStep = ()=>{
    if(step>1){
      setStep(step-1)
    }
  }
  return(
      <div className="w-full max-w-7xl overflow-hidden min-h-screen grid grid-cols-1 md:grid-cols-[320px_1fr]">
      {/* LEFT PANEL */}
 <div className="bg-[#e2dff8] p-8 flex flex-col justify-between">
   <div>
            <div className='flex items-baseline text-[#483dec]'>
                <Mic size={28}/>
                <Link to='/' className='leading-none text-2xl flex font-bold'>ratify</Link>
            </div>
            <div className="mt-10 space-y-8">

              {/* STEP 1 */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold
                  ${
                    step>1
                    ?
                    "bg-[#483dec] text-white"
                    :
                    step===1
                    ?
                    "bg-[#483dec] text-white"
                    :
                    "bg-gray-300"
                  }`}
                >
                  {
                    step>1
                    ?
                    <Check size={20}/>
                    :
                    "1"
                  }
                </div>
                <p className="text-gray-700 font-semibold">
                  Your speaking style
                </p>
              </div>
              {/* STEP 2 */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold
                  ${
                    step>2
                    ?
                    "bg-[#483dec] text-white"
                    :
                    step===2
                    ?
                    "bg-[#483dec] text-white"
                    :
                    "bg-gray-300"
                  }`}
                >
                  {
                    step>2
                    ?
                    <Check size={20}/>
                    :
                    "2"
                  }
                </div>
                <p className="text-gray-700 font-semibold">
                  Your role
                </p>
              </div>
              {/* STEP 3 */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold
                  ${
                    step===3
                    ?
                    "bg-[#483dec] text-white"
                    :
                    "bg-gray-300"
                  }`}
                >
                  3
                </div>
                <p className="text-gray-700 font-semibold">
                  Your goal
                </p>
       </div>
     </div>
   </div>
   <p className="text-sm text-gray-500 font-semibold mt-10">
     Every great speaker starts somewhere. Let's find yours.
   </p>
 </div>

 {/* RIGHT PANEL */}
 <div className="p-6 md:p-12">
   {/* STEP 1 */}
   {
     step===1 && (
       <div>
         <p className="text-[#483dec] font-semibold">
                  STEP 1 OF 3
                </p>
                <h2 className="text-3xl font-bold mt-3">
                  How do you usually express yourself?
                </h2>
                <p className="text-gray-500 font-semibold mt-2">
                  This helps Oratify personalise your speaking journey.
                </p>
                <div className="mt-8 space-y-4">
                  {
                    speakingOptions.map((item)=>(
                      <button
                        key={item.id}
                        onClick={()=>setAnswers({...answers,style:item.id})}
                        className={`w-full border rounded-xl p-5 flex gap-4 text-left transition
                        ${
                          answers.style===item.id
                          ?
                          "border-[#483dec] bg-[#e2dff8]"
                          :
                          "border-gray-300"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#ECE8FF] flex items-center justify-center font-semibold text-[#483dec]">
                          {item.id}
                        </div>
                        <p className="flex items-center font-semibold">
                          {item.text}
                        </p>
                      </button>
                    ))
                  }
                </div>
              </div>
            )
          }
          {/* STEP 2 */}
          {
            step===2 && (
              <div>
                <p className="text-[#483dec] font-semibold">
                  STEP 2 OF 3
                </p>
                <h2 className="text-3xl font-bold mt-3">
                  What best describes you?
                </h2>
                <p className="text-gray-500 mt-2">
                  Choose your path so we can tailor lessons, practice sessions and feedback for you.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {
                    roleOptions.map((item)=>(
                      <button
                        key={item.title}
                        onClick={()=>setAnswers({...answers,role:item.title})}
                        className={`border rounded-xl p-6 text-left transition
                        ${
                          answers.role===item.title
                          ?
                          "border-[#483dec] bg-[#e2dff8]"
                          :
                          "border-gray-300"
                        }`}
                      >
                        <div className="text-[#483dec]">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold mt-3">
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </button>
                    ))
                  }
                </div>
              </div>
            )
          }
          {/* STEP 3 */}
          {
            step===3 && (
              <div>
                <p className="text-[#483dec] font-semibold">
                  STEP 3 OF 3
                </p>
                <h2 className="text-3xl font-bold mt-3">
                  What's your main goal?
                </h2>
                <p className="text-gray-500 mt-2">
                  We will build your personal roadmap around this. You can always change it later.
                </p>
                <div className="mt-8 space-y-4">
                  {
                    goalOptions.map((item)=>(
                      <button
                        key={item.title}
                        onClick={()=>setAnswers({...answers,goal:item.title})}
                        className={`w-full border rounded-xl p-5 flex gap-4 transition text-left
                        ${
                          answers.goal===item.title
                          ?
                          "border-[#483dec] bg-[#e2dff8]"
                          :
                          "border-gray-300"
                        }`}
                      >
                        <div className="text-[#483dec]">
                          {item.icon}
                        </div>
                        <p className="font-semibold">
                          {item.title}
                        </p>
 </button>
             ))
           }
         </div>
       </div>
     )
   }
   {/* COMPLETE */}
   {
     step===4 && (
       <div className="text-center flex flex-col items-center justify-center min-h-100">
         <div className="w-20 h-20 rounded-full bg-[#e2dff8] flex items-center justify-center">
           <Check className="text-[#483dec]" size={40}/>
         </div>
                <h2 className="text-4xl font-bold mt-6">
                  You're All Set
                </h2>
                <p className="text-gray-500 mt-3">
                  Your speaking journey starts now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    onClick={()=>navigate("/dashboard")}
                    className="bg-[#483dec] text-white px-8 py-3 rounded-xl"
                  >
                    Go to Dashboard
                  </button>
                  <button
                    onClick={()=>{
                      setStep(1)
                      setAnswers({
                        style:"",
                        role:"",
                        goal:""
 })
             }}
             className="border border-[#483dec] text-[#483dec] px-8 py-3 rounded-xl"
           >
             Start Again
           </button>
         </div>
       </div>
     )
   }
   {/* FOOT */}
   {
     step<4 && (
       <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-4">
         <div className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
           <Shield size={16} className="text-[#483dec] "/>
                  Your answers are private.
                </div>
                <div className="flex gap-3">
                  {
                    step>1 && (
                      <button
                        onClick={prevStep}
                        className="px-5 py-2 rounded-lg bg-gray-100"
                      >
                        Back
                      </button>
                    )
                  }
                  <button
                    onClick={nextStep}
                    disabled={
                      (step===1 && !answers.style)
                      ||
                      (step===2 && !answers.role)
                      ||
                      (step===3 && !answers.goal)
                    }
                    className="px-5 py-2 rounded-lg bg-[#483dec] text-white disabled:opacity-40"
                  >
                    {
                      step===3
                      ?
                      "Start My Journey"
                      :
                      "Continue"
                    }
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
  )
}
export default Onboarding;