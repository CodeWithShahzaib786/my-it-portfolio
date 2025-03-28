import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        {/* Tabs Trigger Button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Work Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contact">Contact Us</TabsTrigger>
      </TabsList>
      {/* Tabs Content Here */}
      {/* Education */}
      <TabsContent value="education">
        <Education />
      </TabsContent>
      {/* Experience */}
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      {/* Skills */}
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      {/* Projects */}
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
      {/* Contact */}
      <TabsContent value="contact">
        <Contact />
      </TabsContent>
    </Tabs>
  );
}
