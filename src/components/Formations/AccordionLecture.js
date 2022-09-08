import React, { useState } from "react";

import { Card } from "react-bootstrap";

//import "bootstrap/dist/css/bootstrap.min.css";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
//import Typography from '@material-ui/core/Typography';
import ExpandMore  from '@material-ui/icons/ExpandMore';

export default function AccordionLecture(props) {
  
  const [expandedPanel, setExpandedPanel] = useState('panel1');

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className="">

      <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>

        <AccordionSummary expandIcon={<ExpandMore className="text-blue" />} >
          <div><i className="fa fa-flag fa-2x text-blue "></i> Titre du chapitre Suspendisse  sit amet blandit leo lobortis</div>
        </AccordionSummary>

        <AccordionDetails >
		<div className="px-3">
		  <p>Partie 1: blandit leo lobortis eget</p>
		  <p>Partie 2: elit  lacus ex,</p>
		  <p>Partie 3: Lorem ipsum dolSuspendisse malesuada lacus ex,
		  sit amet blandit leo lobortis eget.</p>
	  	</div>
        </AccordionDetails>

      </Accordion>

      <Accordion expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')}>

        <AccordionSummary expandIcon={<ExpandMore className="text-blue" />} >
          <div><i className="fa fa-flag fa-2x text-blue "></i> 4: Titre du chapitre Suspendisse malesuada lacus ex,</div>
        </AccordionSummary>

        <AccordionDetails >
		<div className="px-3">
		  <p>Partie 1: blandit leo lobortis eget</p>
		  <p>Partie 2: elit  lacus ex,</p>
		  <p>Partie 3: Lorem ipsum dolSuspendisse malesuada lacus ex,
		  sit amet blandit leo lobortis eget.</p>
	  	</div>
        </AccordionDetails>

      </Accordion>

      <Accordion expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')}>

        <AccordionSummary expandIcon={<ExpandMore className="text-blue" />} >
          <div><i className="fa fa-flag fa-2x text-blue "></i>Titre du chapitresit amet blandit leo lobortis</div>
        </AccordionSummary>

        <AccordionDetails >
		<div className="px-3">
		  <p>Partie 1: blandit leo lobortis eget</p>
		  <p>Partie 2: elit  lacus ex,</p>
		  <p>Partie 3: Lorem ipsum dolSuspendisse malesuada lacus ex,
		  sit amet blandit leo lobortis eget.</p>
	  	</div>
        </AccordionDetails>

      </Accordion>
      
      <Accordion expanded={expandedPanel === 'panel4'} onChange={handleAccordionChange('panel4')}>

        <AccordionSummary expandIcon={<ExpandMore className="text-blue" />} >
          <div><i className="fa fa-flag fa-2x text-blue "></i>Chapitre 4: Cit amet blandit leo lobortis</div>
        </AccordionSummary>

        <AccordionDetails >
		<div className="px-3">
		  <p>Partie 1: blandit leo lobortis eget</p>
		  <p>Partie 2: elit  lacus ex,</p>
		  <p>Partie 3: Lorem ipsum dolSuspendisse malesuada lacus ex,
		  sit amet blandit leo lobortis eget.</p>
	  	</div>
        </AccordionDetails>

      </Accordion>
      
      <Accordion expanded={expandedPanel === 'panel5'} onChange={handleAccordionChange('panel5')}>

        <AccordionSummary expandIcon={<ExpandMore className="text-blue" />} >
          <div><i className="fa fa-flag fa-2x text-blue "></i> Titre du chapitre </div>
        </AccordionSummary>

        <AccordionDetails >
		<div className="px-3">
		  <p>Partie 1: blandit leo lobortis eget</p>
		  <p>Partie 2: elit  lacus ex,</p>
		  <p>Partie 3: Lorem ipsum dolSuspendisse malesuada lacus ex,
		  sit amet blandit leo lobortis eget.</p>
	  	</div>
        </AccordionDetails>

      </Accordion>

    </div>
  );
}
