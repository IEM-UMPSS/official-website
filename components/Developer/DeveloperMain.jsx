import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import DeveloperTwo from './DeveloperSectionTwo';
import OpenSourceContributor from './OpenSourceContributor';
import Cta from '../Home/CtaSection';
import SEO from '../../components/SEO/index';


class DeveloperTeam extends Component {

    render() {

        return (
            <main>
	           <SEO 
                	pageTitle="Hall of Fame" 
                	pageDescription="Join the Development Team and Open Source Contributors of the IEM-UMP Student Section, and help drive innovation in the engineering community. Contribute your software development skills and technology knowledge, collaborate with others, and volunteer to make a difference. Get involved today!"
                	pageKeywords="Development Team, Open Source Contributors, IEM-UMP Student Section, engineering community, software development, technology, collaboration, volunteer, contribute."
            	/>

           		{/* breadcrumb-start */}
				<Breadcrumb pageTitle="Hall of Fame" breadCrumbImage="/assets/img/page-title/faq.jpg" />
				{/* breadcrumb-end */}

                {/* Teacher-start */}
				<DeveloperTwo />
				{/* Teacher-end */}

                {/* cta-start */}
				<OpenSourceContributor />
				{/* cta-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default DeveloperTeam;