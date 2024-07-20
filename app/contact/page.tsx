import Connect from "@/components/Connect";
import ContactForm from "@/components/ContactForm";
import PhoneIcon from "@/components/phoneIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCalendar, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {

  return (
    <body>

      <div className="bg-[#100E1F] min-h-screen pt-12 px-0 w-auto box-border">
        <div className="flex-nowrap">
          <div className="px-40 text-center flex w-full flex-col flex-none h-screen flex-nowrap justify-center">
            <div className="flex flex-col flex-none flex-nowrap gap-[60px] justify-between">
              {/* Connect with Firrnas Title Start */}
              <div className="text-center px-40 flex justify-between flex-col flex-none flex-nowrap gap-[16px] max-h-[171px]">
                <div className="text-white ">
                  <button className="py-2 px-4 border-[1px] border-solid rounded-3xl text-sm text-[#9a8fff] bg-[#4e47f526] border-[#4e47f580]">
                    Get on touch
                  </button>
                </div>
                <div className="my-[10px]">
                  <h1 className="text-4xl text-white text-[48px] not-italic ">Connect with Firrnas</h1>
                </div>
                <div className="text-[#a2a1b7] text-[18px]" >
                  <h6 className="text-white">Your questions and feedback matter to us</h6>
                </div>
              </div>
              {/* End */}

              {/* Form Section Start */}
              <div className="pr-40 pl-40 opacity-100 transform-none perspective-[1200px]">
                <div className="flex items-center justify-center flex-col h-full w-full relative">
                  <form method="POST" className="grid grid-rows-[max-content_1fr_max-content] gap-4 w-full h-full">
                    <div className="grid grid-flow-col gap-4 w-full">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="appearance-none w-full px-4 py-4 rounded-2xl bg-[#15132a] text-white border-none outline-none"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="appearance-none w-full px-4 py-4 rounded-2xl bg-[#15132a] text-white border-none outline-none"
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="appearance-none w-full px-4 py-4 rounded-2xl bg-[#15132a] text-white border-none outline-none"
                    ></textarea>
                    <div className="">
                      <input
                        type="submit"
                        value="Submit"
                        className="bg-[#2F2C85] text-white font-bold p-4 border-none outline-none cursor-pointer
                       appearance-none select-none items-start text-center cursor-default box-border bg-buttonface text-buttontext
                        whitespace-pre border-[2px] border-outset border-buttonborder inline-block w-full leading-[1.4em]
                           rounded-[28px]   text-[16px]  
                         z-10 opacity-100"
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/* End */}
            </div>
          </div>

          {/* Additional Sections Start */}
          <div className="grid gap-5 items-center justify-center overflow-hidden px-[160px] pb-[60px] relative w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faPhone} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Call Us</h4>
                </div>
                <p className="text-[#9399f4] text-lg hover:text-[#ffffff] cursor-pointer">1-385-555-5476</p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Send Us An Email</h4>
                </div>
                <div className="opacity-100 flex flex-col items-start justify-start gap-[6px] h-min overflow-visible p-0 relative w-full">
                  <p className="text-[#9399f4] text-lg hover:text-[#ffffff] cursor-pointer">info@firrnas.com</p>
                  <p className="text-[#9399f4] text-lg hover:text-[#ffffff] cursor-pointer">business@firrnas.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Schedule Meeting</h4>
                </div>
                <div className="opacity-100">
                  <a className="
                  bg-[rgb(47,44,133)] rounded-full opacity-100 
                  flex items-center cursor-pointer flex-nowrap 
                  gap-[8px] h-auto overflow-hidden px-[24px] py-[16px] 
                  relative no-underline w-auto
                  flex-row justify-center h-min text-white
                  overflow-visible border border-[#282545] border-solid 
                  border-[1px] flex-none font-bold">
                    <p>See Availability</p>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Office Location</h4>
                </div>
                <p className="text-[#9399f4] text-lg hover:text-[#ffffff] cursor-pointer">United Kingdom</p>
              </div>
            </div>
          </div>

          {/* End */}

          {/* Frequently Questions */}
          <div className="flex flex-none flex-row flex-nowrap gap-1.5 h-min justify-center overflow-visible p-[60px_120px] relative w-full content-start items-start">
            <div className="flex flex-row items-start justify-between overflow-visible p-0 relative h-min">
              <div className="flex flex-col items-start justify-start gap-4 overflow-visible p-0 relative h-min">
                <div className="opacity-100 transform perspective-[1200px] translate-x-0 translate-y-0 scale-100 rotate-0 rotate-x-0 rotate-y-0 skew-x-0 skew-y-0 translate-z-0 flex-none h-auto relative w-auto">
                  <div className="border border-[rgba(78,71,245,0.5)] border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] bg-[rgba(78,71,245,0.15)] opacity-100 rounded-full flex items-center justify-center gap-1 min-w-min h-min p-2.5 relative">
                    <div className="outline-none flex flex-col justify-start flex-shrink-0 text-[#abaaed] space-y-0 transform-none opacity-100 flex-none h-auto relative whitespace-pre w-auto">
                      <p className="text-[#ffffff] tracking-normal leading-[21px] space-y-[20px] text-left text-decoration-none text-transform-none">
                        Frequently asked questions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-1 overflow-visible p-0 pr-10 font-[900] font=[40px] relative w-full h-min">
                  <div className="contents">
                    <div className="flex flex-col justify-start flex-shrink-0 opacity-100 transform-none whitespace-pre-wrap relative h-auto" >
                      <h2 className="text-left text-center text-white leading-[63px] tracking-[0em] whitespace-normal">
                        Some of the things you may want to know
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-[4px] h-min overflow-visible relative w-full">
                  <div className="contents">
                    <div className="flex flex-row items-start justify-start opacity-100 transform-none relative whitespace-pre-wrap break-words text-[18px]">
                      <h6 className="text-left text-[#a2a1b7] tracking-normal leading-[27px] text-start text-transform-none text-decoration-none space-y-[20px]">
                        Have more questions? Don’t hesitate to reach us
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[60px] overflow-visible relative w-[1px] h-min">
                <div className="contents">
                  <div className="opacity-100 transform perspective-[1200px] translate-x-0 translate-y-0 scale-100 rotate-0 rotate-x-0 rotate-y-0 skew-x-0 skew-y-0 translate-z-0 flex-none h-auto relative w-full z-20">

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End */}

        </div>
      </div>

    </body>
  );
}
