import { Fragment } from "react";
import { QUESTIONS } from "../libs/questions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible orientation="vertical" className="flex flex-col items-center justify-center mt-6 gap-y-2 w-[90%] md:w-home-content-md lg:w-home-content-lg xl:w-home-content-xl">
      {QUESTIONS.map(({ question, paragraphs }, index) => (
        <AccordionItem className="w-full bg-home-question-btn border-0" value={`q-${index}`} key={index}>
          <AccordionTrigger
            className="flex justify-between items-center font-NetflixSansRegular w-full p-6 text-lg md:text-2xl hover:bg-home-question-btn-hover hover:no-underline"
          >
            {question}
          </AccordionTrigger>
          <AccordionContent
            className="border-t p-6 border-t-black text-lg md:text-2xl font-NetflixSansRegular">
            {paragraphs.map((par, index) => (
              <Fragment key={index}>
                {index === 1 && (
                  <br/>
                )}
                <p>{par}</p>
              </Fragment>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FAQ