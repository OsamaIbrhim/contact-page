import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCalendar, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@/components/accordion";

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

            {/* call us start */}
            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faPhone} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Call Us</h4>
                </div>
                <p className="text-[#9399f4] text-lg hover:text-[#ffffff] cursor-pointer">1-385-555-5476</p>
              </div>
            </div>
            {/* End */}

            {/* send us start */}
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
            {/* end */}

            {/* schedule meeting start */}
            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Schedule Meeting</h4>
                </div>
                <div className="features opacity-100">
                  <button>See Availability
                    <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                  </button>
                </div>
              </div>
            </div>
            {/* end */}

            {/* location start */}
            <div className="flex flex-col items-start justify-start gap-1 h-min overflow-visible p-8 relative w-full bg-[#15132a] border border-[#282545] rounded-xl opacity-100">
              <div className="flex flex-col items-start justify-start gap-[32px] h-min overflow-visible p-0 relative w-full">
                <div className="font-size-h4 opacity-100 flex flex-col items-start justify-start gap-2 h-min overflow-visible p-0 relative w-full">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#2f2c85] text-3xl" />
                  <h4 className="">Office Location</h4>
                </div>
                <p className="text-[#9399f4] text-lg hover:text-[#ffffff] cursor-pointer">United Kingdom</p>
              </div>
            </div>
            {/* end */}

          </div>
          {/* End */}

          {/* Frequently Questions start */}
          <div className="item-start flex flex-none  flex-row flex-nowrap gap-[4px] h-min content-center visible relative w-full px-[48px] py-[60px]">
            <div className="item-start grow flex flex-row flex-nowrap h-min contant-between visible p-0 relative w-full bg-[#2a2a1b7]">

              {/* Left Side */}
              <div className="flex flex-col grow flex-nowrap items-start gap-[16px] h-min content-start visible p-0 relative">
                <div className="flex items-start bg-[#4e47f5]/15 border border-[#4e47f5]/50 rounded-full p-4">
                  <p className="text-[#9a8fff] font-medium text-lg">
                    Frequently asked questions
                  </p>
                </div>
                <h2 className="text-white text-3xl font-bold leading-tight">
                  Some of the things you may want to know
                </h2>
                <h6 className="text-[#a2a1b7] text-lg">
                  Have more questions? Don’t hesitate to reach us
                </h6>
              </div>
              {/* end */}

              {/* Right Side */}
              <div className="flex flex-col  h-auto relative">
                <Accordion />
              </div>
              {/* end */}

            </div>
          </div>

        </div>
      </div>

    </body>
  );
}
