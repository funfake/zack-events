import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/horizontal-tabs";
import { Album, FlameKindling, Library, Plug, Users } from "lucide-react";

const Keypoints = () => {
  return (
    <Tabs
      defaultValue="events"
      className="flex flex-col justify-center md:flex-row gap-3 md:gap-5"
    >
      <TabsList>
        <TabsTrigger value="events">
          <div className="keypoints-card">
            <div className="keypoints-header">
              <FlameKindling size={20} />
              <h2 className="keypoints-title">Event first recruitment</h2>
            </div>
            <p className="keypoints-body">
              A weekend of events to promote & recruit
            </p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="workflow">
          <div className="keypoints-card">
            <div className="keypoints-header">
              <Plug size={20} />
              <h2 className="keypoints-title">Keep your workflow</h2>
            </div>
            <p className="keypoints-body">
              Plugs directly into your current job board
            </p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="track">
          <div className="keypoints-card">
            <div className="keypoints-header">
              <Library size={20} />
              <h2 className="keypoints-title">Track everything</h2>
            </div>
            <p className="keypoints-body">
              Gather hard & soft skills, use them to make better choices
            </p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="human">
          <div className="keypoints-card">
            <div className="keypoints-header">
              <Users size={20} />
              <h2 className="keypoints-title">For the people</h2>
            </div>
            <p className="keypoints-body">
              Make the process feel more human in a two-way exchange
            </p>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="events" className="">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="workflow">Change your password here.</TabsContent>
      <TabsContent value="track">Change your password here.</TabsContent>
      <TabsContent value="human">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default Keypoints;
