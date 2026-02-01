import OurMission from "../components/aboutus/OurMission";
import CommunicationMain from "../components/communication/CommunicationMain";

export default function AboutusPage() {
  return (
    <>
      <div>
        <div className="container m-auto">
          <OurMission />
        </div>
        <CommunicationMain />
      </div>
    </>
  );
}
