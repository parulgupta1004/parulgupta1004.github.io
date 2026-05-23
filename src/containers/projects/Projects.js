import React from "react";
import "./Projects.css";
import { projectSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div>
      <div className="main" id="projects">
        <div className="project-main-div">
          <div className="project-header">
            <h1 className="heading project-heading">{projectSection.title}</h1>
            <p className="subTitle project-subtitle">{projectSection.subtitle}</p>
          </div>
          
          <div className="project-cards-div">
            <div className="certificate-card">
              <div className="certificate-image-div">
                <img alt="Fairlearn" className="card-image" src={require("../../assests/images/fairlearn.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title">Fairlearn: Responsible AI</h5>
                <p className="card-subtitle">This <b>socio-technical</b> work caters to enhancements in fairness constraint definition by generalising them and adding new disparity metrics. Also, experimented to improve the time to train a classifier under fairness constraints. All contributions were directly incorporated in <b>open-source project</b> named fairlearn, started by <b>Microsoft</b>.</p>
              </div>
              <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("https://github.com/fairlearn/fairlearn")}><b>GitHub</b></p>
                <p onClick={() => openUrlInNewTab("http://fairlearn.org/")}><b>Fairlearn</b></p>
              </div>
            </div>
            
            
            <div className="certificate-card">
              <div className="certificate-image-div">
                <img alt="BERT" className="card-image" src={require("../../assests/images/covid.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title">Comparative study of BERT models for Open QA using CORD-19</h5>
                <p className="card-subtitle">This work caters to extract the relevant documents from the recent CORD-19. Encoder-mapper based model: encoder - to create clusters from the contextual embeddings using <b>BERTbase</b>, <b>SciBERT</b> and <b>BioBERT</b>; mapper - to find the most relevant cluster to answer a user provided question based on coronavirus; and then, analyse the results from each BERT variant.</p>
              </div>
              <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("https://github.com/NLP-org/nlpproject-explore-cord-dataset")}><b>GitHub</b></p>
                <p onClick={() => openUrlInNewTab("https://huggingface.co/transformers/quickstart.html")}><b>Huggingface</b></p>
              </div>
            </div>
            
            
            <div className="certificate-card">
              <div className="certificate-image-div">
                <img alt="Neural Nets" className="card-image" src={require("../../assests/images/neural.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title">Image Captioning Model using Neural Nets</h5>
                <p className="card-subtitle">This work is an experiment towards image description and understanding the context of images by leveraging neural networks. Encoder-decoder model to caption the image with pre-trained VGG19 and LSTM as baseline and then, improved the BLEU-4 score from 0.028 to 0.313 by incorporating <b>ResNeXt</b> and <b>BERT</b> as encoder and decoder respectively on <b>MS-COCO</b>.</p>
                <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("http://cocodataset.org/#home")}><b>MS-COCO</b></p>
              </div>
              </div>
            </div>
            
            
            <div className="certificate-card">
              <div className="certificate-image-div">
                <img alt="Sentiment Analysis" className="card-image" src={require("../../assests/images/senti.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title">Sentiment Analysis</h5>
                <p className="card-subtitle">This work is an effort to classify sentiments using various classification models and improving the performance by incorporating various pre-processing techniques like Stemming, Lemmatization, cleaning, etc. and contextual embeddings derived from <b>ELMO</b>.</p>
              </div>
              <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("https://github.com/parul100495/sentiment-analysis")}><b>GitHub</b></p>
                <p onClick={() => openUrlInNewTab("https://allennlp.org/elmo")}><b>ELMO</b></p>
              </div>
            </div>
            
            
            <div className="certificate-card">
              <div className="certificate-image-div">
                <img alt="WoMan" className="card-image" src={require("../../assests/images/woman.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title">WoMan: Wonderful Management</h5>
                <p className="card-subtitle">This hobby project is a chatbot + webApp designed to manage files/spoken texts - converting speech-to-text, recording, indexing, tagging, fetching files and visualising the connections between them. Used pagerank algorithm for ranking the texts and <b>spaCy</b> for parsing text. <b>Google Cloud Platform</b> is used for the chatbot and database storage.</p>
              </div>
              <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("https://github.com/parul100495/Woman")}><b>GitHub</b></p>
                <p onClick={() => openUrlInNewTab("https://spacy.io/")}><b>spaCy</b></p>
                <p onClick={() => openUrlInNewTab("https://dialogflow.com/")}><b>DialogFlow</b></p>
                <p onClick={() => openUrlInNewTab("https://firebase.google.com/")}><b>Firebase</b></p>
              </div>
            </div>
            
            
            <div className="certificate-card">
              <div className="certificate-image-div">
                <img alt="Genetic Programming" className="card-image" src={require("../../assests/images/genes.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title">Design of genetic programming algorithm with simultaneous feature selection & its implementation for handling big data</h5>
                <p className="card-subtitle">This work is an attempt to implement multi-objective GP classifier with dynamic initialisation & cross-over based on hill climbing approach. Incorporated scalability & simulated it for big datasets on <b>MS Azure Spark</b> clusters.</p>
              </div>
              <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("http://dspace.iiti.ac.in:8080/jspui/handle/123456789/892")}><b>IIT Library</b></p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="main" id="projects2">
        <div className="project-main-div">
          <div className="project-header">
            <h1 className="heading project-heading">{projectSection.title2}</h1>
          </div>
          <div className="project-cards-div">
            <div className="certificate-card">
              <div className="certificate-detail-div">
                <h5 className="card-title">Intelligent Wheelchair System with Brain Computer Interface & Gesture Recognition</h5>
                <p className="card-subtitle">This work involved designing an automation control by non-invasive BCI via ECG signals manipulation. It included safety checks and architecture to control lateral motions using gesture recognition.</p>
                <p className="card-subtitle2">Patent: Application No. <b>201821010650 A</b>, Indian Patent Office, filed on <b>22/03/2018</b>, published on <b>27/09/2019</b> </p>
              </div>
              <div className="certificate-card-footer">
                <p onClick={() => openUrlInNewTab("http://www.ipindia.nic.in/writereaddata/Portal/IPOJournal/1_4791_1/Part-2.pdf")}><b>IPO Journal link</b></p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>    
  );
}
