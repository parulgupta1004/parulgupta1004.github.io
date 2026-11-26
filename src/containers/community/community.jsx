import EngagementList from "../../components/engagementList/EngagementList";
import engagements from "../../data/engagements.json";

export default function Community() {
  return <EngagementList {...engagements.community} />;
}
