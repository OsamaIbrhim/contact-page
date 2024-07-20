import Connect from "@/components/Connect";
import ContactForm from "@/components/ContactForm";
import PhoneIcon from "@/components/phoneIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCalendar, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="bg-[#100E1F] min-h-screen pt-12 px-0 w-auto box-border">
      <div className="flex-nowrap">
        <div className="px-40 text-center flex w-full flex-col flex-none h-screen flex-nowrap justify-center">
          <div className="flex flex-col flex-none flex-nowrap gap-[60px] justify-between">
            {/* Connect with Firrnas Title */}
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

            {/* Form Section */}
            <div className="framer-je4ujn pr-40 pl-40 " style={{ opacity: 1, transform: 'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)' }}>
              <div className="framer-ll2c8e-container" style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <form method="POST" style={{ display: 'grid', gridTemplateRows: 'max-content 1fr max-content', gridTemplateColumns: '1fr', gap: '16px', width: '100%', height: '100%' }}>
                  <div style={{ width: '100%', display: 'grid', gridAutoFlow: 'column', gap: '16px' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input-style"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input-style"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="input-style"
                  ></textarea>
                  <div className="bg-[#2F2C85] rounded-[28px] text-white leading-[1.4em] p-[16px] font-bold	">
                    <input
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="flex flex-row gap-5 h-min items-center justify-center overflow-hidden px-[160px] pb-[60px] relative w-full">
          <div className="flex flex-row gap-5 h-min items-start justify-start overflow-visible p-8 w-[430px]">
            <div className="bg-[#15132a] border border-[#282545] rounded-2xl w-full opacity-100 p-4">
              <div className="flex flex-col gap-4 items-start">
                <FontAwesomeIcon icon={faPhone} className="text-[#2f2c85] text-3xl" />
                <h3 className="text-white font-bold">Call Us</h3>
                <p className="text-[#9399f4] text-lg">1-385-555-5476</p>
              </div>
            </div>
          </div>

          <div className="bg-[#15132a] border border-[#282545] rounded-2xl w-[430px] p-4">
            <div className="flex flex-col gap-4 items-start">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#2f2c85] text-3xl" />
              <h3 className="text-white font-bold">Send Us An Email</h3>
              <p className="text-[#9399f4] text-lg">info@firrnas.com</p>
              <p className="text-[#9399f4] text-lg">business@firrnas.com</p>
            </div>
          </div>

          <div className="bg-[#15132a] border border-[#282545] rounded-2xl w-[430px] p-4">
            <div className="flex flex-col gap-4 items-start">
              <FontAwesomeIcon icon={faCalendar} className="text-[#2f2c85] text-3xl" />
              <h3 className="text-white font-bold">Schedule Meeting</h3>
              <button className="bg-[#2F2C85] text-white rounded-full px-4 py-2 flex items-center">
                See Availability
                <FontAwesomeIcon icon={faArrowRight} className="text-white ml-2" />
              </button>
            </div>
          </div>

          <div className="bg-[#15132a] border border-[#282545] rounded-2xl w-[430px] p-4">
            <div className="flex flex-col gap-4 items-start">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#2f2c85] text-3xl" />
              <h3 className="text-white font-bold">Office Location</h3>
              <p className="text-[#9399f4] text-lg">United Kingdom</p>
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>
    </div>
  );
}
