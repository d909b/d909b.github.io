//<![CDATA[
angular.module('components', [])
       .directive('publication',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/publication.html"
                    };
                  })
       .directive('news',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/news.html"
                    };
                  })
       .directive('supervision',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/supervision.html"
                    };
                  })
       .directive('award',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/award.html"
                    };
                  })
       .directive('media',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/media.html"
                    };
                  })
       .config(function($interpolateProvider){
    		$interpolateProvider.startSymbol('{a{').endSymbol('}a}');
		});

var app = angular.module('app', ['components'])

// CREDITS: http://stackoverflow.com/questions/16630471/how-can-i-invoke-encodeuricomponent-from-angularjs-template
app.filter('encodeURIComponent', function() {
    return function(arg) {
      return window.encodeURIComponent(arg).replace(/%.{2}/g, "_");
    };
});

app.filter('highlight', function($sce) {
    return function (text, search) {
        if (!search) {
            return $sce.trustAsHtml(text);
        }
        return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted-text">$&</span>'));
    };
});

app.controller('AppController', function($scope){

    $scope.publications = [
        {
            title: "Automated False Alarm Reduction in a Real-life Intensive Care Setting using Motion Detection.",
            authors: "Carl Muroi, Sando Meier, Valeria De Luca, David J. Mack, Christian Strässle, Patrick Schwab, Walter Karlen and Emanuela Keller",
            year: "2019",
            venue: "Neurocritical Care",
            pdf: "https://link.springer.com/article/10.1007/s12028-019-00711-w",
            code: "",
            bibtex: "http://schwabpatrick.com/bibtex/motiondetection.txt",
            image: ""
        },
        {
            title: "Learning Counterfactual Representations for Estimating Individual Dose-Response Curves.",
            authors: "Patrick Schwab, Lorenz Linhardt, Stefan Bauer, Joachim M. Buhmann and Walter Karlen",
            year: "2019",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/pdf/1902.00981.pdf",
            code: "https://github.com/d909b/drnet",
            bibtex: "http://schwabpatrick.com/bibtex/drnet.txt",
            image: ""
        },
        {
            title: "Perfect Match: A Simple Method for Learning Representations For Counterfactual Inference With Neural Networks.",
            authors: "Patrick Schwab, Lorenz Linhardt and Walter Karlen",
            year: "2019",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/pdf/1810.00656.pdf",
            code: "https://github.com/d909b/perfect_match",
            bibtex: "http://schwabpatrick.com/bibtex/perfect_match.txt",
            image: ""
        },
        {
            title: "PhoneMD: Learning to Diagnose Parkinson's Disease from Smartphone Data.",
            authors: "Patrick Schwab and Walter Karlen",
            year: "2019",
            venue: "AAAI Conference on Artificial Intelligence",
            pdf: "https://arxiv.org/pdf/1810.01485.pdf",
            code: "",
            poster: "http://schwabpatrick.com/posters/AAAI19-PD-poster2-24Jan2019.pdf",
            presentation: "http://schwabpatrick.com/presentations/AAAI19-PD-presentation.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/phonemd.txt",
            image: "",
            notable: "Acceptance rate: 16.2%"
        },
        {
            title: "Granger-causal Attentive Mixtures of Experts: Learning Important Features with Neural Networks.",
            authors: "Patrick Schwab, Djordje Miladinovic and Walter Karlen",
            year: "2019",
            venue: "AAAI Conference on Artificial Intelligence",
            pdf: "https://arxiv.org/pdf/1802.02195.pdf",
            code: "https://github.com/d909b/ame",
            poster: "http://schwabpatrick.com/posters/AAAI19-AME-poster1-28Jan2019.pdf",
            presentation: "http://schwabpatrick.com/presentations/AAAI19-AME-presentation.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/ame.txt",
            image: "",
            notable: "Acceptance rate: 16.2%"
        },
        {
            title: "Not to Cry Wolf: Distantly Supervised Multitask Learning in Critical Care.",
            authors: "Patrick Schwab, Emanuela Keller, Carl Muroi, David J. Mack, Christian Strässle and Walter Karlen",
            year: "2018",
            venue: "International Conference on Machine Learning (ICML)",
            pdf: "https://arxiv.org/pdf/1802.05027.pdf",
            code: "https://github.com/d909b/DSMT-Nets",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/22b381c3fd3bd0d668f3488b343ef72d574005df/ICML18-poster.pdf",
            presentation: "http://schwabpatrick.com/presentations/ICML18-dsmtnet-presentation.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/nottocry.txt",
            image: "",
            notable: "Acceptance rate: 25.1%"
        },
        {
            title: "Automated Extraction of Digital Biomarkers for Parkinson’s Disease.",
            authors: "Patrick Schwab, Mohammad A.K. Moghaddam and Walter Karlen",
            year: "2017",
            venue: "RECOMB/ISCB Conference on Regulatory and Systems Genomics with DREAM CHALLENGES",
            pdf: "https://www.researchgate.net/profile/Patrick_Schwab3/publication/324170800_Automated_Extraction_of_Digital_Biomarkers_for_Parkinson's_Disease/links/5ac3866e0f7e9bfc0460a3ff/Automated-Extraction-of-Digital-Biomarkers-for-Parkinsons-Disease.pdf?_sg%5B0%5D=4zzpC_PSm3nKP0vFgJoeHtQ0-Zh0MQHg2_bha-59KuZ8Q38ZKVnRsmGxNJ1sk1MLS_jW3NB6UTTVowNCnGwD2g.0rsOEE7ccdx93Vo0V4ivTnzfw14dIrrzBguuxnRmbdamQtGRNlg5bMZ6mkykaNNPPu0QACCxFKKjaUOOVQFQBg&_sg%5B1%5D=vW_k9AO76zfoVdcTRRcn7TsTl_aftkj5PEt23x5H9HIJGM43orN94tn4Zw0Ia5UpJGpr9PQ-6z8s3gQSHVbwtEJyqDs1LzmiYHeAEsnkg1ll.0rsOEE7ccdx93Vo0V4ivTnzfw14dIrrzBguuxnRmbdamQtGRNlg5bMZ6mkykaNNPPu0QACCxFKKjaUOOVQFQBg&_iepl=",
            code: "https://github.com/d909b/eth_dream_pd_subchallenge1",
            bibtex: "http://schwabpatrick.com/bibtex/pd_challenge.txt",
            image: ""
        },
        {
            title: "Beat by Beat: Classifying Cardiac Arrhythmias with Recurrent Neural Networks.",
            authors: "Patrick Schwab, Gaetano Claudio Scebba, Jia Zhang, Marco Delai and Walter Karlen",
            year: "2017",
            venue: "Computing in Cardiology",
            pdf: "https://arxiv.org/pdf/1710.06319.pdf",
            code: "https://github.com/d909b/heart_rhythm_attentive_rnn",
            presentation: "http://schwabpatrick.com/presentations/CinC17-BeatByBeat-presentation.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/beatbybeat.txt",
            image: "img/cinc17.png"
        },
        {
            title: "Capturing the Essence: Towards the Automated Generation of Transparent Behavior Models.",
            authors: "Patrick Schwab and Helmut Hlavacs",
            year: "2015",
            venue: "AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment",
            pdf: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/aiide2015.pdf",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/81b4ad5fca44928163b4b01ff5eeae6eef2ddc13/aiide2015-poster.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/capturing_the_essence.txt",
            image: "img/aiide15.png"
        },
        {
            title: "PALAIS: A 3D Simulation Environment for Artificial Intelligence in Games.",
            authors: "Patrick Schwab and Helmut Hlavacs",
            year: "2015",
            venue: "AISB 2015 Symposium on AI and Games",
            pdf: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/AISB2015.pdf",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/81b4ad5fca44928163b4b01ff5eeae6eef2ddc13/AISB2015-poster.pdf",
            code: "https://github.com/palais-ai/",
            bibtex: "http://schwabpatrick.com/bibtex/palais.txt",
            image: "img/aisb15.png"
        },
        {
            title: "A Unified Framework for Retrieving Diverse Social Images.",
            authors: "Maia Zaharieva and Patrick Schwab",
            year: "2014",
            venue: "CEUR Workshop Proceedings, 1263, Aachen: RWTH, 2014.",
            pdf: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/MediaEval2014.pdf",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/81b4ad5fca44928163b4b01ff5eeae6eef2ddc13/MediaEval2014-poster.pdf",
            code: "https://bitbucket.org/d909b/diverse-social-image-search",
            bibtex: "http://schwabpatrick.com/bibtex/diverse_images.txt",
            image: "img/mediaeval14.png"
        },
    ];

    $scope.news = [
        {
            title: "I presented my PhD thesis 'Learning to Treat, Explain and Diagnose with Neural Networks' at the Max Planck Institute for Intelligent Systems in Tübingen, Germany.",
            date: "2019-08-08"
        },
        {
            title: "I presented our work on learning counterfactual representations for medical applications with neural networks at the ICU Cockpit Workshop, University Hospital Zurich, CH.",
            date: "2019-06-24"
        },
        {
            title: "I held an introductory workshop on version control with git for scientists and engineers without a computer science background in Zurich, CH.",
            date: "2019-03-10",
            link: "http://schwabpatrick.com/presentations/workshop-git-10Apr2019.pdf"
        },
        {
            title: "Our work on diagnosing Parkinson's disease using smartphone data has been featured as one of '9 revolutionary applications of AI' by BotXO.",
            date: "2019-03-07",
            link: "https://www.botxo.co/2019/03/07/9-revolutionary-applications-of-ai/"
        },
        {
            title: "I presented our recent works on diagnosing Parkinson's disease from smartphone data and on explaining the predictions of neural networks with attentive mixtures of experts at AAAI Conference on Artificial Intelligence in Honululu, US.",
            date: "2019-02-01",
            link: "https://aaai.org/Conferences/AAAI-19/"
        },
        {
            title: "Our research on reducing false alarms in critical care was featured by ETH News.",
            date: "2019-01-23",
            link: "https://www.ethz.ch/en/news-and-events/eth-news/news/2019/01/fewer-false-alarms-in-intensive-care.html"
        },
        {
            title: "I joined the Max Planck ETH Center for Learning Systems as an affiliate fellow.",
            date: "2019-01-01",
            link: "https://learning-systems.org/"
        },
        {
            title: "Two papers accepted for publication at AAAI 2019.",
            date: "2018-11-01"
        },
        {
            title: "I presented our work on distantly supervised multitask learning at the Machine Learning Lunch Seminar in Zurich, Switzerland.",
            date: "2018-10-02"
        },
        {
            title: "I gave a talk on reducing false alarms in critical care and diagnosing diseases with smartphone sensors at the annual meeting of the Swiss Society for Critical Care in Interlaken, Switzerland.",
            date: "2018-09-19"
        },
        {
            title: "I presented our work on reducing false alarms in critical care with deep learning at Philips Medical Systems in Böblingen, Germany.",
            date: "2018-07-19"
        },
        {
            title: "I presented our work on semi-supervised learning with distant supervision through multiple auxiliary tasks at the International Conference of Machine Learning (ICML) in Stockholm, Sweden.",
            date: "2018-07-12",
            link: "https://icml.cc/Conferences/2018/Schedule?day=2"
        },
        {
            title: "I represented the European Sleep Research Society (ESRS) at the International Workshop on Wearables in Sleep and Circadian Science in Baltimore, US.",
            date: "2018-06-02",
            link: "http://sleeploop.ch"
        },
        {
            title: "We released a revised version of our paper on attentive mixtures of experts on arXiv - now with more experimental data that shows strong results compared to several state-of-the-art baselines.",
            date: "2018-05-29",
            link: "http://arxiv.org/abs/1802.02195"
        },
        {
            title: "Our paper on reducing the false alarm rate in critical care with distant supervision was accepted to ICML 2018.",
            link: "http://arxiv.org/abs/1802.05027",
            date: "2018-05-11"
        },
        {
            title: "The ETH Entrepreneur Club honored my student Matas Pocevicius with an award for his thesis project - congrats!",
            date: "2018-05-11",
            link: "https://award.entrepreneur-club.org/"
        },
        {
            title: "I presented the results of our work on smarter biosignal monitoring at IBM Research Zurich, Switzerland.",
            link: "http://www.nfp75.ch/de/Events/Seiten/170122_nfp75_events_ICU.aspx",
            date: "2018-03-09"
        },
        {
            title: "We released our recent work on reducing the high false alarm rate in critical care using all available biosignal monitors and small amounts of labelled data.",
            link: "http://arxiv.org/abs/1802.05027",
            date: "2018-02-15"
        },
        {
            title: "We released our recent work on providing measurably accurate feature importance scores for neural networks - enabling exciting use cases in knowledge discovery and biomedical applications.",
            link: "http://arxiv.org/abs/1802.02195",
            date: "2018-02-08"
        },
        {
            title: "I presented our 2nd place solution in the DREAM challenge on identifying digital biomarkers from smartphone sensors for Parkinson's disease at the RECOMB/ISCB Conference on Regulatory and Systems Genomics in New York, USA.",
            link: "https://www.iscb.org/recomb-regsysgen2017-program/recomb-regsysgen2017-agendas",
            date: "2017-11-21"
        },
        {
            title: "I gave a keynote speech on 'The AI Revolution in Health Care' at AIshow in Madrid, Spain.",
            link: "https://the-aishow.com/agenda-aishow/",
            date: "2017-10-25"
        },
        {
            title: "I presented our work on 'Smarter Monitoring in the Intensive Care Unit' at the NeuroMedTech Seminar, University Hospital Zurich in Zurich, Switzerland.",
            date: "2017-10-18"
        },
        {
            title: "I presented our paper on detecting heart arrhythmias with mobile event recorders at Computing in Cardiology in Rennes, France.",
            link: "https://www.cinc2017.org/scientific-program",
            date: "2017-09-27"
        },
        {
            title: "We presented our work on smartphone apps for personalised management of low back pain at Scientifica in Zurich, Switzerland.",
            link: "http://www.mhsl.hest.ethz.ch/mhsl-newschannel/2017/09/mhsl-at-scientifica-2017.html",
            date: "2017-09-01"
        },
        {
            title: "We released a teaser video for our upcoming booth at Scientifica on using smartphones and big data to better understand low back pain.",
            link: "https://twitter.com/ETH/status/900357105428951041",
            date: "2017-08-23"
        },
        {
            title: "I presented our research project on personalised management of low back pain at the kick-off event of the Swiss National Research Program 75 'Big Data' in Berne, Switzerland.",
            link: "http://www.nfp75.ch/en/Pages/Home.aspx",
            date: "2017-05-09"
        }
    ];

    $scope.supervision = [
        {
            title: "Learning to Diagnose Diabetes from Full Body Magnetic Resonance Imaging.",
            name: "Benedikt Dietz, ETH Zurich",
            level: "MSc, with Dr. Bauer, MPI for Intelligent Systems",
            date: "2019"
        },
        {
            title: "Predictive Power of Respiratory Rate for Cardiac Arrythmias.",
            name: "Georgia Channing, University of Southern California",
            level: "BSc, with Prof. Karlen",
            date: "2019"
        },
        {
            title: "Learning Counterfactual Representations for Ventilation in Critical Care.",
            name: "Lorenz Linhardt, ETH Zurich",
            level: "MSc, with Prof. Buhmann and Prof. Karlen",
            date: "2018"
        },
        {
            title: "Intelligent Decision-Support for Diagnosis and Monitoring of Parkinson’s Disease.",
            name: "Matas Pocevicius, ETH Zurich",
            level: "MSc, with Prof. Karlen",
            date: "2018"
        },
        {
            title: "Battery-efficient Human Activity Recognition from Smartphone Sensor Data.",
            name: "Avik Mukhija, ETH Zurich",
            level: "BSc, with Prof. Hiliges and Prof. Karlen",
            date: "2017"
        },
        {
            title: "Unsupervised Discovery of Patterns in Human Mobility Behavior.",
            name: "Selin Olenik, Imperial College London",
            level: "Amgen Scholar, with Prof. Karlen",
            date: "2017"
        }
    ];

    $scope.awards = [
        {
            title: "Associated Fellow.",
            venue: "Max Planck ETH Center for Learning Systems",
            date: "2019"
        },
        {
            title: "GPU Grant.",
            venue: "Nvidia Corporation",
            date: "2018"
        },
        {
            title: "2nd Place Parkinson’s Disease Digital Biomarker Challenge.",
            venue: "DREAM Challenges",
            date: "2017"
        },
        {
            title: "Best of the Best Award.",
            venue: "Faculty of Computer Science, University of Vienna, Austria",
            date: "2016"
        },
        {
            title: "NaturTalente High-Potential Program.",
            venue: "University of Vienna, Austria",
            date: "2015"
        },
        {
            title: "Five Honorary Scholarships.",
            venue: "Funded by the Austrian Government",
            date: "2011 - 2015"
        }
    ];

    $scope.media_coverage = [
        {
            title: "9 Revolutionary applications of AI that will make you re-think Machine Learning.",
            venue: "BotXO",
            date: "Mar, 2019",
            link: "https://www.botxo.co/2019/03/07/9-revolutionary-applications-of-ai/"
        },
        {
            title: "Fewer False Alarms in Intensive Care.",
            venue: "ETH News",
            date: "Jan, 2019",
            link: "https://www.ethz.ch/en/news-and-events/eth-news/news/2019/01/fewer-false-alarms-in-intensive-care.html"
        },
        {
            title: "Une Application Smartphone pour Détecter la Maladie de Parkinson.",
            venue: "Les Clés de Demain - Le Monde",
            date: "Oct, 2018",
            link: "https://lesclesdedemain.lemonde.fr/technologie/une-application-smartphone-pour-detecter-la-maladie-de-parkinson_a-88-6910.html"
        },
        {
            title: "Your Smartphone Data And Some AI Smarts Could Diagnose Parkinson’s Disease.",
            venue: "News18",
            date: "Oct, 2018",
            link: "https://www.news18.com/news/tech/your-smartphone-data-and-some-ai-smarts-could-diagnose-parkinsons-disease-1899059.html"
        },
        {
            title: "Researchers use smartphone app to aid Parkinson's Disease diagnoses.",
            venue: "CNET",
            date: "Oct, 2018",
            link: "https://www.cnet.com/news/researchers-use-smartphone-app-to-aid-parkinsons-disease-diagnoses/"
        },
        {
            title: "Researchers claim AI can diagnose Parkinson’s disease from smartphone data.",
            venue: "VentureBeat",
            date: "Oct, 2018",
            link: "https://venturebeat.com/2018/10/04/researchers-claim-ai-can-diagnose-parkinsons-disease-from-smartphone-data/"
        },
        {
            title: "Digital Has Got Your Back.",
            venue: "Neue Zürcher Zeitung (NZZ)",
            date: "Dec, 2017",
            link: "https://bytebucket.org/d909b/scientific-artifacts/raw/219f67c6c5fb9b8c93d628bd5d6632b4261c004e/nzz_4.12.2017.JPG"
        },
        {
            title: "Scientifica 2017: Playfully Fighting Low Back Pain.",
            venue: "ETH News",
            date: "Aug, 2017",
            link: "https://www.youtube.com/watch?v=N1Pk3586M0E"
        }
    ]
});

$(document).ready(function() {
    $('.collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
        e.preventDefault();
    });

    $('[data-toggle="collapse"]').on('click', function(e) {
        e.preventDefault();
        $($(this).data('target')).toggleClass('in');
    });
});
//]]>