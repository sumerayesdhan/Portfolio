import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";

// Import local certificates (PDFs/images)
import certFutureprime from "../../Assets/certificate/certificate futureprime.pdf";
import certAIFoundation from "../../Assets/certificate/artificial intelegence foundation certifications.pdf";
import certAwsCloudQuest from "../../Assets/certificate/aws-cloud-quest-cloud-practitioner (1).png.pdf";
import certJava from "../../Assets/certificate/java sf8.pdf";
import certUiPath from "../../Assets/certificate/ui path certificate.pdf";
import certCisco from "../../Assets/certificate/certificate cisco.pdf";
import certReact from "../../Assets/certificate/React Web Developer Certification.pdf";
import certAzure from "../../Assets/certificate/azure az900 certificate.pdf";

// Build certificates list using your actual files
const certificates = [
  {
    id: 1,
    title: "FuturePrime Certificate",
    issuer: "FuturePrime",
    date: "",
    description: "Certification awarded by FuturePrime.",
    src: certFutureprime,
    type: "pdf",
  },
  {
    id: 2,
    title: "AI Foundation Certification",
    issuer: "",
    date: "",
    description: "Artificial Intelligence foundation certification.",
    src: certAIFoundation,
    type: "pdf",
  },
  {
    id: 3,
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "AWS",
    date: "",
    description: "AWS Cloud Quest Cloud Practitioner.",
    src: certAwsCloudQuest,
    type: "pdf",
  },
  {
    id: 4,
    title: "Java SF8 Certificate",
    issuer: "",
    date: "",
    description: "Java certification.",
    src: certJava,
    type: "pdf",
  },
  {
    id: 5,
    title: "UiPath Certificate",
    issuer: "UiPath",
    date: "",
    description: "UiPath RPA certification.",
    src: certUiPath,
    type: "pdf",
  },
  {
    id: 6,
    title: "Cisco Certificate",
    issuer: "Cisco",
    date: "",
    description: "Cisco certification.",
    src: certCisco,
    type: "pdf",
  },
  {
    id: 7,
    title: "React Web Developer Certification",
    issuer: "",
    date: "",
    description: "React Web Developer certification.",
    src: certReact,
    type: "pdf",
  },
  {
    id: 8,
    title: "Azure AZ-900 Certificate",
    issuer: "Microsoft",
    date: "",
    description: "Microsoft Azure Fundamentals (AZ-900).",
    src: certAzure,
    type: "pdf",
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "var(--text-color)" }}>
          Here are some of my certifications. Click any card to view the certificate.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((certificate) => (
            <Col md={4} className="project-card" key={certificate.id}>
              <div 
                className="project-card-view"
                style={{ cursor: "pointer", minHeight: 180, display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="certificate-content">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  {certificate.issuer ? (
                    <p className="certificate-issuer">
                      <strong>Issuer:</strong> {certificate.issuer}
                    </p>
                  ) : null}
                  {certificate.date ? (
                    <p className="certificate-date">
                      <strong>Date:</strong> {certificate.date}
                    </p>
                  ) : null}
                  <p className="certificate-description">
                    {certificate.description}
                  </p>
                  <div className="certificate-click-hint">
                    <small>Click to view certificate</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal for displaying certificate (PDF/image) */}
        <Modal 
          show={showModal} 
          onHide={handleCloseModal}
          size="xl"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedCertificate?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCertificate && (
              <div className="text-center">
                {selectedCertificate.type === "pdf" ? (
                  <object
                    data={selectedCertificate.src}
                    type="application/pdf"
                    width="100%"
                    height="700px"
                  >
                    <p>
                      Unable to display PDF. You can
                      {" "}
                      <a href={selectedCertificate.src} target="_blank" rel="noreferrer">
                        open it in a new tab
                      </a>
                      .
                    </p>
                  </object>
                ) : (
                  <img 
                    src={selectedCertificate.src} 
                    alt={selectedCertificate.title}
                    style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                  />
                )}
                <div className="mt-3">
                  {selectedCertificate.issuer ? (
                    <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
                  ) : null}
                  {selectedCertificate.date ? (
                    <p><strong>Date:</strong> {selectedCertificate.date}</p>
                  ) : null}
                  {selectedCertificate.description ? (
                    <p><strong>Description:</strong> {selectedCertificate.description}</p>
                  ) : null}
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
}

export default Certifications;
