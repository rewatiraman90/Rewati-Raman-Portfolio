import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Central Micro Market Associate</h4>
                <h5>OYO Hotels & Homes Ltd</h5>
              </div>
              <h3>2015</h3>
            </div>
            <p>
              Identified and pursued new growth opportunities, enhancing market
              share significantly. Managed client relationships and drove
              occupancy improvements across assigned micro-markets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Support Lead Engineer</h4>
                <h5>OYO Hotels & Homes Ltd</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Optimized service workflows, reducing average incident response
              time by 15% through a new ticketing process. Mentored and trained
              new staff on troubleshooting and system operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevSecOps Engineer</h4>
                <h5>Oravel Stays Limited (OYO)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing 20+ Azure, AWS, and GCP components with 99.99% uptime.
              Streamlined CI/CD pipelines, led on-premises to cloud migrations,
              and coordinated high-priority incident resolution within strict SLAs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
