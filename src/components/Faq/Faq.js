import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.scss'

export default function Faq() {
    return (
        <div className='parentDiv my-2 container' style={{ padding: '1.5rem 1.5rem' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='text-primary' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="HeadingColor QuestionItem">What is your Experience?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-small">
                        Currently I have 3 internship experience as web developer with practical knowledge
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='text-primary' />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="HeadingColor QuestionItem">Are you availaibel for work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-small">
                        Yes I am looking for better Opportunities
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='text-primary' />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className="HeadingColor QuestionItem">what is your key skill?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-small">
                        Majorly web developement
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='text-primary' />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography className="HeadingColor QuestionItem">Were are you located?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-small">
                        I am from city called Gulbarga from Karnataka
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
