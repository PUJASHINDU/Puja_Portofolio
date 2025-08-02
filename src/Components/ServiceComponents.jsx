import { Card, CardBody, Typography } from "@material-tailwind/react";
import serviceone from "../assets/service/serviceone.png";
import servicetwo from "../assets/service/servicetwo.png";
import servicetree from "../assets/service/servicetree.png";

export function LogoSection6() {
  return (
    <section className="py-8 px-4 sm:px-8 lg:py-20">
      <div className="container mx-auto grid gap-10 lg:grid-cols-2 items-center">
        {/* Bagian Typography */}
        <div className="text-center lg:text-left">
          <Typography
            variant="h1"
            className="mb-5 !text-2xl !leading-snug lg:!text-3xl text-customBlue font-poppins lg:-mt-80"
          >
            The services I provide
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto max-w-xl !text-gray-500 lg:mx-0 mb-10 text-justify text-[18px] font-poppins"
          >
            I offer website creation and development services from start to finish, focusing on responsive UI design, security, and performance. Using modern technologies like React.js and Tailwind CSS, I am ready to create attractive,
            functional websites that are accessible across various devices, tailored to your business needs.
          </Typography>
        </div>

        {/* Bagian Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Card className="w-full shadow-lg h-auto py-4">
            <img src={servicetree} alt="Website creation" className="w-32 h-32 object-cover mx-auto mt-2" />
            <CardBody className="text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins">
                Website Creation
              </Typography>
              <Typography variant="small" className="text-gray-500 font-poppins">
                I provide full-cycle website creation services.
              </Typography>
            </CardBody>
          </Card>

          {/* Card 2 */}
          <Card className="w-full shadow-lg h-auto py-4">
            <img src={servicetwo} alt="Website Development" className="w-32 h-32 object-cover mx-auto mt-2" />
            <CardBody className="text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins">
                Website Development
              </Typography>
              <Typography variant="small" className="text-gray-500 font-poppins">
                Creating scalable and high-performance websites.
              </Typography>
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card className="w-full shadow-lg h-auto py-4 sm:col-span-2">
            <img src={serviceone} alt="UI Design" className="w-32 h-32 object-cover mx-auto mt-2" />
            <CardBody className="text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins">
                UI Design
              </Typography>
              <Typography variant="small" className="text-gray-500 font-poppins">
                Designing user-friendly and aesthetically pleasing interfaces.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default LogoSection6;
