import EngagementList from "../../components/engagementList/EngagementList";
import engagements from "../../data/engagements.json";

export default function Talks() {
  return <EngagementList {...engagements.talks} />;
}
