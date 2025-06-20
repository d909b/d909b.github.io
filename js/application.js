//<![CDATA[
angular.module('components', [])
       .directive('publication',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/publication.html"
                    };
                  })
       .directive('toc',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/toc.html"
                    };
                  })
       .directive('gallery',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/gallery.html",
                        transclude: true
                    };
                  })
       .directive('galleryitem',
                  function() {
                    return {
                      restrict: 'E',
                        scope: {
                          src: "@",
                          desc: "@"
                        },
                      templateUrl: "/ng-templates/galleryitem.html",
                      link: function(scope, element, attr) {
                        element.on('click', function(event){
                              popup.open($(this));
                        });
                      },
                    };
                  })
       .directive('postitem',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/postitem.html"
                    };
                  })
       .directive('postteaser',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/postteaser.html"
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
		})
        .factory("posts", function ($http) {
            return {
                    getPosts: function () {
                        return $http.get("/api/posts/list.json")
                            .then(function (posts) {
                                let all_posts = posts.data.map(function (post) {
                                    /* Convert date into Date */
                                    post.date = new Date(post.date);
                                    /* Remove starting slash from URL */
                                    post.url = post.url.replace(/^\//, "");
                                    return post;
                                });
                                return all_posts;
                            });
                    }
                };
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

app.controller('AppController', function($scope, posts){
    posts.getPosts().then(function(posts) {
        $scope.posts = posts;
    });
    $scope.publications = [
        {
            title: "Efficient Differentiable Discovery of Causal Order.",
            authors: "Mathieu Chevalley, Arash Mehrjou, Patrick Schwab",
            year: "2024",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2410.08787",
            bibtex: "http://schwabpatrick.com/bibtex/diffintersort.txt",
            image: "",
        },
        {
            title: "Knowledge abstraction and filtering based federated learning over heterogeneous data views in healthcare.",
            authors: "Anshul Thakur, Soheila Molaei, Pafue Christy Nganjimi, Andrew Soltan, Patrick Schwab, Kim Branson, David A Clifton",
            year: "2024",
            venue: "npj Digital Medicine",
            pdf: "https://www.nature.com/articles/s41746-024-01272-9",
            bibtex: "http://schwabpatrick.com/bibtex/diffintersort.txt",
            image: "",
        },
        {
            title: "Recombinant zoster vaccine and reduced risk of dementia: matched-cohort study using large-scale electronic health records and machine learning methodology.",
            authors: "Patrick Schwab, Robyn Widenmaier, Halima Tahrat, Maria Littmann, Bruno Anspach, Carolyn Buser-Doepner, Andreas Georgiou, Max Horn, Sanjay Kumar, Vitaly Polisky, Aleksei Triastcyn, Cornelia M Van Duijn, Pascal Geldsetzer",
            year: "2024",
            venue: "Alzheimer's Association International Conference",
            pdf: "https://alz.confex.com/alz/2024/meetingapp.cgi/Paper/88064",
            bibtex: "http://schwabpatrick.com/bibtex/hzdementia.txt",
            image: "",
            notable: "Featured Research",
        },
        {
            title: "Deriving Causal Order from Single-Variable Interventions: Guarantees & Algorithm.",
            authors: "Mathieu Chevalley, Patrick Schwab, Arash Mehrjou",
            year: "2024",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2405.18314",
            bibtex: "http://schwabpatrick.com/bibtex/intersort.txt",
            image: "",
            notable: "",
            twitter: "https://x.com/schwabpa/status/1797961443578384883",
            code: "https://github.com/MathieuChevalley/Intersort",
            blog: "https://gsk.ai/blogs/intersort-deriving-causal-order-in-single-variable-interventional-data/"
        },
        {
            title: "Mutations in the tail domain of the neurofilament heavy chain gene increase the risk of amyotrophic lateral sclerosis.",
            authors: "Heather Marriott, Thomas P. Spargo, Ahmad Al Khleifat, Isabella Fogh, Project MinE ALS Sequencing Consortium, Peter M Andersen, Nazli A. Başak, Johnathan Cooper-Knock, Philippe Corcia, Philippe Couratier, Mamede de Carvalho, Vivian Drory, Jonathan D. Glass, Marc Gotkine, Orla Hardiman, John E. Landers, Russell McLaughlin, Jesús S. Mora Pardina, Karen E. Morrison, Susana Pinto, Monica Povedano, Christopher E. Shaw, Pamela J. Shaw, Vincenzo Silani, Nicola Ticozzi, Philip van Damme, Leonard H. van den Berg, Patrick Vourc’h, Markus Weber, Jan H. Veldink, Richard J. Dobson, Patrick Schwab, Ammar Al-Chalabi, Alfredo Iacoangeli",
            year: "2024",
            venue: "Annals of clinical and translational neurology\t",
            pdf: "https://www.medrxiv.org/content/10.1101/2022.11.03.22281905",
            bibtex: "http://schwabpatrick.com/bibtex/heather_als.txt",
            image: "",
            notable: ""
        },
        {
            title: "Sample Selection Bias in Machine Learning for Healthcare.",
            authors: "Vinod Kumar Chauhan, Lei Clifton, Achille Salaün, Huiqi Yvonne Lu, Kim Branson, Patrick Schwab, Gaurav Nigam, David A Clifton",
            year: "2024",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2405.07841",
            bibtex: "http://schwabpatrick.com/bibtex/samplesel.txt",
            image: "",
            notable: "",
        },
        {
            title: "Development of Predictive Models to Inform a Novel Risk Categorization Framework for Antibiotic Resistance in E. coli-Causing Uncomplicated Urinary Tract Infection.",
            authors: "Ryan K Shields, Wendy Y Cheng, Kalé Kponee-Shovein, Daniel Indacochea, Chi Gao, Fernando Kuwer, Ashish V Joshi, Fanny S Mitrani-Gold, Patrick Schwab, Diogo Ferrinho, Malena Mahendran, Lisa Pinheiro, Jimmy Royer, Madison T Preib, Jennifer Han, Richard Colgan",
            year: "2024",
            venue: "Clinical Infectious Diseases",
            pdf: "https://academic.oup.com/cid/advance-article/doi/10.1093/cid/ciae171/7640789",
            bibtex: "http://schwabpatrick.com/bibtex/antibioticresistance.txt",
            image: "",
            notable: "",
        },
        {
            title: "Multi-omics Prediction from High-content Cellular Imaging with Deep Learning.",
            authors: "Rahil Mehrizi, Arash Mehrjou, Maryana Alegro, Yi Zhao, Benedetta Carbone, Carl Fishwick, Johanna Vappiani, Jing Bi, Siobhan Sanford, Hakan Keles, Marcus Bantscheff, Cuong Nguyen, Patrick Schwab",
            year: "2023",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2306.09391",
            bibtex: "http://schwabpatrick.com/bibtex/image2omics.txt",
            image: "",
            notable: "",
            twitter: "https://twitter.com/schwabpa/status/1675768905208299521?s=20",
            code: "https://github.com/GSK-AI/image2omics",
            blog: "https://www.gsk.ai/blogs/image2omics-deep-learning-to-predict-multi-omics-measurements-from-cell-images/"
        },
        {
            title: "DiscoBAX: Discovery of Optimal Intervention Sets in Genomic Experiment Design.",
            authors: "Clare Lyle, Arash Mehrjou, Pascal Notin, Andrew Jesson, Stefan Bauer, Yarin Gal, Patrick Schwab",
            year: "2023",
            venue: "International Conference on Machine Learning (ICML)",
            pdf: "https://proceedings.mlr.press/v202/lyle23a.html",
            bibtex: "http://schwabpatrick.com/bibtex/discobax.txt",
            image: "",
            notable: "",
            poster: "http://schwabpatrick.com/posters/ICML23-DiscoBAX-26Jul23.pdf",
            blog: "https://www.gsk.ai/blogs/discobax-discovery-of-optimal-intervention-sets-in-genomic-experiment-design/"
        },
        {
            title: "Unsupervised machine learning identifies distinct molecular and phenotypic ALS subtypes in post-mortem motor cortex and blood expression data.",
            authors: "Heather Marriott, Renata kabiljo, Guy P Hunt, Ahmad Al Khleifat, Ashley R Jones, Claire Troakes, Abigail Pfaff, John Quinn, Sulev Koks, Richard Dobson, Patrick Schwab, Ammar Al-Chalabi, Alfredo Iacoangeli",
            year: "2023",
            venue: "Acta Neuropathologica Communications",
            pdf: "https://www.medrxiv.org/content/10.1101/2023.04.21.23288942v1",
            bibtex: "http://schwabpatrick.com/bibtex/heather_als2.txt",
            image: "",
            notable: ""
        },
        {
            title: "Addressing the unresolved challenge of quantifying skiing exposure–a proof of concept using smartphone sensors.",
            authors: "Anita Meinke, Jörg Spörri, Luzius Brogli, Patrick Schwab, Walter Karlen",
            year: "2023",
            venue: "Frontiers in Sports and Active Living",
            pdf: "https://www.frontiersin.org/articles/10.3389/fspor.2023.1157987/full",
            bibtex: "http://schwabpatrick.com/bibtex/skiexposure.txt",
            image: "",
            notable: "",
        },
        {
            title: "CausalBench: A Large-scale Benchmark for Network Inference from Single-cell Perturbation Data.",
            authors: "Mathieu Chevalley, Yusuf Roohani, Arash Mehrjou, Jure Leskovec, Patrick Schwab",
            year: "2022",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2210.17283",
            bibtex: "http://schwabpatrick.com/bibtex/causalbench.txt",
            image: "",
            notable: "",
            code: "https://github.com/causalbench/causalbench",
            challenge: "https://www.gsk.ai/causalbench-challenge/",
            blog: "https://www.gsk.ai/publications/causalbench-a-large-scale-benchmark-for-network-inference-from-single-cell-perturbation-data/"
        },
        {
            title: "FED-CD: Federated Causal Discovery from Interventional and Observational Data.",
            authors: "Amin Abyaneh, Nino Scherrer, Patrick Schwab, Stefan Bauer, Bernhard Schölkopf, Arash Mehrjou",
            year: "2022",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2211.03846",
            bibtex: "http://schwabpatrick.com/bibtex/fed_cd.txt",
            image: "",
            notable: "",
            blog: "https://www.gsk.ai/publications/fed-cd-federated-causal-discovery-from-interventional-and-observational-data/",
        },
        {
            title: "Global healthcare fairness: We should be sharing more, not less, data.",
            authors: "Kenneth P. Seastedt, Patrick Schwab, Zachary O’Brien, Edith Wakida, Karen Herrera, Portia Grace F. Marcelo, Louis Agha-Mir-Salim, Xavier Borrat Frigola, Emily Boardman Ndulue, Alvin Marcelo, Leo Anthony Celi",
            year: "2022",
            venue: "PLOS Digital Health",
            pdf: "https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000102",
            bibtex: "http://schwabpatrick.com/bibtex/global_health_fairness.txt",
            image: "",
            notable: "",
            twitter: "https://twitter.com/schwabpa/status/1578671679483838466?s=20",
        },
        {
            title: "Conditional Generation of Medical Time Series for Extrapolation to Underrepresented Populations.",
            authors: "Simon Bing, Andrea Dittadi, Stefan Bauer, Patrick Schwab",
            year: "2022",
            venue: "PLOS Digital Health",
            pdf: "https://arxiv.org/abs/2201.08186",
            bibtex: "http://schwabpatrick.com/bibtex/conditional_ehr.txt",
            image: "",
            notable: "",
            code: "https://github.com/simonbing/HealthGen"
        },
        {
            title: "GeneDisco: A Benchmark for Experimental Design in Drug Discovery.",
            authors: "Arash Mehrjou, Ashkan Soleymani, Andrew Jesson, Pascal Notin, Yarin Gal, Stefan Bauer, Patrick Schwab",
            year: "2022",
            venue: "International Conference on Learning Representations (ICLR)",
            pdf: "https://arxiv.org/abs/2110.11875",
            bibtex: "http://schwabpatrick.com/bibtex/genedisco.txt",
            poster: "http://schwabpatrick.com/posters/ICLR22_genedisco-poster1-5Apr2022.pdf",
            image: "",
            notable: "",
            code: "https://github.com/genedisco/genedisco",
            challenge: "https://www.gsk.ai/genedisco-challenge/",
        },
        {
            title: "Federated Learning in Multi-Center Critical Care Research: A Systematic Case Study using the eICU Database.",
            authors: "Arash Mehrjou, Ashkan Soleymani, Annika Buchholz, Jürgen Hetzel, Patrick Schwab, Stefan Bauer",
            year: "2022",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2204.09328",
            bibtex: "http://schwabpatrick.com/bibtex/fed_icu.txt",
            image: "",
            notable: "",
        },
        {
            title: "Forecasting the COVID-19 Pandemic: Lessons learned and future directions.",
            authors: "Saketh Sundar, Patrick Schwab, Jade Z.H. Tan, Santiago Romero-Brufau, Leo Anthony Celi, Dechen Wangmo, Nicolás Della Penna",
            year: "2021",
            venue: "medRxiv preprint",
            pdf: "https://www.medrxiv.org/content/10.1101/2021.11.06.21266007v1",
            bibtex: "http://schwabpatrick.com/bibtex/forecasting_covid.txt",
            image: "",
            notable: ""
        },
        {
            title: "Diabetes detection from whole-body magnetic resonance imaging using deep learning.",
            authors: "Benedikt Dietz, Jürgen Machann, Vaibhav Agrawal, Martin Heni, Patrick Schwab, Julia Dienes, Steffen Reichert, Andreas L. Birkenfeld, Hans-Ulrich Häring, Fritz Schick, Norbert Stefan, Andreas Fritsche, Hubert Preissl, Bernhard Schölkopf, Stefan Bauer, Robert Wagner",
            year: "2021",
            venue: "JCI Insight",
            pdf: "https://insight.jci.org/articles/view/146999/version/1",
            bibtex: "http://schwabpatrick.com/bibtex/diabetes_mri.txt",
            image: "",
            notable: ""
        },
        {
            title: "Learning Neural Causal Models with Active Interventions.",
            authors: "Nino Scherrer, Olexa Bilaniuk, Yashas Annadani, Anirudh Goyal, Patrick Schwab, Bernhard Schölkopf, Michael C. Mozer, Yoshua Bengio, Stefan Bauer, Nan Rosemary Ke",
            year: "2021",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/abs/2109.02429",
            bibtex: "http://schwabpatrick.com/bibtex/causal_active_targetting.txt",
            image: "",
            notable: ""
        },
        {
            title: "NCoRE: Neural Counterfactual Representation Learning for Combinations of Treatments.",
            authors: "Sonali Parbhoo, Stefan Bauer, Patrick Schwab",
            year: "2021",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/pdf/2103.11175.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/ncore.txt",
            image: "",
            notable: ""
        },
        {
            title: "Crowdsourcing digital health measures to predict Parkinson's disease severity: the Parkinson's Disease Digital Biomarker DREAM Challenge.",
            authors: "Solveig K. Sieberts, Jennifer Schaff, Marlena Duda, Balint Armin Pataki, Ming Sun, Phil Snyder, Jean-Francois Daneault, Federico Parisi, Gianluca Costante, Udi Rubin, Peter Banda, Yooree Chae, Elias Chaibub Neto, Ray Dorsey, Zafer Aydin, Aipeng Chen, Laura L. Elo, Carlos Espino, Enrico Glaab, Ethan Goan, Fatemeh Noushin Golabchi, Yasin Gormez, Maria K. Jaakkola, Jitendra Jonnagaddala, Riku Klen, Dongmei Li, Christian McDaniel, Dimitri Perrin, Nastaran Mohammadian Rad, Erin Rainaldi, Stefano Sapienza, Patrick Schwab, Nikolai Shokhirev, Mikko S. Venäläinen, Gloria Vergara-Diaz, Yuqian Zhang, Yuanjia Wang, Yuanfang Guan, Daniela Brunner, Paolo Bonato, Lara M. Mangravite and Larsson Omberg",
            year: "2021",
            venue: "npj Digital Medicine",
            pdf: "https://www.nature.com/articles/s41746-021-00414-7",
            bibtex: "http://schwabpatrick.com/bibtex/crowdsourcing_pd.txt",
            image: "",
            notable: ""
        },
        {
            title: "Real-time Prediction of COVID-19 related Mortality using Electronic Health Records.",
            authors: "Patrick Schwab, Arash Mehrjou, Sonali Parbhoo, Leo Anthony Celi, Jürgen Hetzel, Markus Hofer, Bernhard Schölkopf, Stefan Bauer",
            year: "2021",
            venue: "Nature Communications",
            pdf: "https://www.nature.com/articles/s41467-020-20816-7",
            bibtex: "http://schwabpatrick.com/bibtex/covews.txt",
            image: "",
            notable: "",
            code: "https://github.com/d909b/CovEWS"
        },
        {
            title: "Overcoming Barriers to Data Sharing with Medical Image Generation: A Comprehensive Evaluation.",
            authors: "August DuMont Schütte, Jürgen Hetzel, Sergios Gatidis, Tobias Hepp, Benedikt Dietz, Stefan Bauer, Patrick Schwab",
            year: "2021",
            venue: "npj Digital Medicine",
            pdf: "https://www.nature.com/articles/s41746-021-00507-3",
            bibtex: "http://schwabpatrick.com/bibtex/overcomingbarriers.txt",
            image: "",
            notable: "",
            code: "https://github.com/AugustDS/synthetic-medical-benchmark"
        },
        {
            title: "Diurnal variations in multi-sensor wearable-derived sleep characteristics in morning-and evening-type shift workers under naturalistic conditions.",
            authors: "Ian Clark, Benjamin Stucky, Yasmine Azza, Patrick Schwab, Stefan Müller, Daniel Weibel, Daniel Button, Walter Karlen, Erich Seifritz, Birgit Kleim, Hans-Peter Landolt",
            year: "2021",
            venue: "Chronobiology International",
            pdf: "https://www.tandfonline.com/doi/pdf/10.1080/07420528.2021.1941074?needAccess=true",
            bibtex: "http://schwabpatrick.com/bibtex/diurnalvariations.txt",
            image: "",
            notable: ""
        },
        {
            title: "A Deep Learning Approach to Diagnosing Multiple Sclerosis from Smartphone Data.",
            authors: "Patrick Schwab and Walter Karlen",
            year: "2021",
            venue: "IEEE Journal on Biomedical and Health Informatics",
            pdf: "https://arxiv.org/pdf/2001.09748.pdf",
            bibtex: "http://schwabpatrick.com/bibtex/biomarker_ms.txt",
            image: "",
            notable: ""
        },
        {
            title: "Clinical Predictive Models for COVID-19: Systematic Study.",
            authors: "Patrick Schwab, August Schütte DuMont, Benedikt Dietz, Stefan Bauer",
            year: "2020",
            venue: "Journal of Medical Internet Research",
            pdf: "https://www.jmir.org/2020/10/e21439/pdf",
            bibtex: "http://schwabpatrick.com/bibtex/predcovid19.txt",
            image: "",
            notable: ""
        },
        {
            title: "Learning Counterfactual Representations for Estimating Individual Dose-Response Curves.",
            authors: "Patrick Schwab, Lorenz Linhardt, Stefan Bauer, Joachim M. Buhmann and Walter Karlen",
            year: "2020",
            venue: "AAAI Conference on Artificial Intelligence",
            pdf: "https://arxiv.org/pdf/1902.00981.pdf",
            code: "https://github.com/d909b/drnet",
            bibtex: "http://schwabpatrick.com/bibtex/drnet.txt",
            presentation: "http://schwabpatrick.com/presentations/AAAI20-drnet-spotlight.pdf",
            poster: "http://schwabpatrick.com/posters/AAAI20-drnet-poster-7Feb2020.pdf",
            image: "",
            notable: "Acceptance rate: 20.6%"
        },
        {
            title: "CXPlain: Causal Explanations for Model Interpretation under Uncertainty.",
            authors: "Patrick Schwab and Walter Karlen",
            year: "2019",
            venue: "Advances in Neural Information Processing Systems",
            pdf: "https://arxiv.org/abs/1910.12336",
            poster: "http://schwabpatrick.com/posters/NeurIPS19-cxplain-poster1-23Oct2019.pdf",
            code: "https://github.com/d909b/cxplain",
            bibtex: "http://schwabpatrick.com/bibtex/cxplain.txt",
            image: "",
            notable: "Acceptance rate: 21.2%"
        },
        {
            title: "Learning to Treat, Explain and Diagnose with Neural Networks.",
            authors: "Patrick Schwab",
            year: "2019",
            venue: "PhD thesis, ETH Zurich",
            pdf: "https://www.research-collection.ethz.ch/handle/20.500.11850/379702",
            bibtex: "http://schwabpatrick.com/bibtex/phdthesis.txt",
            image: "",
        },
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
            notable: "Spotlight presentation, Acceptance rate: 25.1%"
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
            title: "I presented our recent work at the Oxford Machine Learning (OxML) summer school in the ML x Bio & Health track in Oxford, UK.",
            date: "2024-07-09",
            link: "https://schwabpatrick.com/presentations/schwab-aiassistants-oxml-9Jul2024.pdf"
        },
        {
            title: "We co-organized the Machine Learning for Drug Discovery (MLDD) 2024 symposium in Vienna, Austria.",
            date: "2024-05-11",
            link: "https://schwabpatrick.com/2024/05/11/iclr2024.html"
        },
        {
            title: "Our work on DiscoBAX for the optimal selection of intervention sets in genetic experiments was presented at ICML 2023 in Honululu, Hawaii.",
            date: "2023-07-28",
            link: "https://proceedings.mlr.press/v202/lyle23a.html"
        },
        {
            title: "Our work on characterising Hepatitis B subtypes based on high dimensional patient data has been features by STAT News.",
            date: "2023-07-13",
            link: "http://schwabpatrick.com/img/stat_hepatitis_b.png"
        },
        {
            title: "Our work with Prof. Leo Celi on assessing the re-identification risk of sharing open health data was featured by MIT News.",
            date: "2022-10-08",
            link: "https://news.mit.edu/2022/patient-data-risks-low-1006"
        },
        {
            title: "The GeneDisco benchmark for experimental discovery in early stage drug target validation with genetic interventions was accepted for publication at the International Conference for Learning Representations (ICLR-22).",
            date: "2022-01-22",
            link: "https://arxiv.org/abs/2110.11875"
        },
        /*
        {
            title: "We released a new preprint on conditionally generating realistic synthetic electronic health record data.",
            date: "2022-01-21",
            link: "https://arxiv.org/abs/2201.08186"
        },
        {
            title: "Announcing the 'Machine Learning for Drug Discovery' workshop at ICLR-22. Featuring a stellar lineup of speakers, a ML for Drug Discovery challenge and a call for community contributions.",
            date: "2022-01-17",
            link: "https://www.mldd-workshop.org/"
        },
        {
            title: "We released a new preprint on benchmarking active learning for drug discovery with genetic interventions on arXiv.",
            date: "2021-10-25",
            link: "https://arxiv.org/abs/2110.11875"
        },
        {
            title: "Our new study on using deep learning and whole-body Magnetic Resonance Imaging (MRI) to detect diabetes and pre-diabetes was published in JCI Insight.",
            date: "2021-09-30",
            link: "https://insight.jci.org/articles/view/146999/version/1"
        },
        {
            title: "We released a new preprint on neural causal structure discovery with active targeting and differentiable causal models.",
            date: "2021-09-07",
            link: "https://arxiv.org/abs/2109.02429"
        },
        {
            title: "I presented on how we are developing medicines with a higher probability of success with robotic automation, AI and molecular perturbations at the Applied Machine Learning Days (AMLD) hosted by EPFL.",
            date: "2021-08-23",
            link: "https://youtu.be/-w7P_PlDTA4?t=4855"
        },
        {
            title: "Our paper on image generation for data sharing in medical imaging was accepted for publication in npj Digital Medicine.",
            date: "2021-07-23",
            link: "https://arxiv.org/pdf/2012.03769.pdf"
        },
        {
            title: "I presented on developing medicines with a higher probability of success at the Algorithms for Hope conference jointly organized by GDI, Swiss Re and IBM Research.",
            date: "2021-06-15",
            link: "https://www.swissre.com/dam/jcr:bc31e5b0-da42-48ac-9d7e-9d8b4b5f5850/presentation-patrick-schwab.pdf"
        },
        {
            title: "Our collaborative work on crowd sourcing digital health measures for Parkinson's disease was published in npj Digital Medicine.",
            date: "2021-03-19",
            link: "https://www.nature.com/articles/s41746-021-00414-7"
        },
        {
            title: "Our paper on real-time prediction of COVID-19 related mortality from electronic health records was accepted for publication at Nature Communications.",
            date: "2021-01-18",
            link: "https://www.nature.com/articles/s41467-020-20816-7"
        },
        {
            title: "We released a new pre-print on overcoming barriers to data sharing in biomedical imaging using generative adversarial networks (GANs).",
            date: "2020-11-29",
            link: "https://arxiv.org/abs/2012.03769"
        },
        {
            title: "Our recent work on predicting clinical pathways for COVID-19 has been accepted for publication at the Journal of Medical Internet Research (JMIR).",
            date: "2020-09-01",
            link: "https://www.jmir.org/2020/10/e21439"
        },
        {
            title: "Our recent work on real-time prediction of COVID-19 related mortality risk has recently been released on arXiv.",
            date: "2020-08-31",
            link: "https://arxiv.org/pdf/2008.13412"
        },
        {
            title: "My PhD thesis research has been awarded the 1st Runner-up Research Award at the Annual Meeting of the Swiss Society of Biomedical Engineering (SSBE) 2020.",
            date: "2020-08-27",
            link: ""
        },
        {
            title: "Our recent paper on diagnosing Multiple Sclerosis using smartphone-derived digital biomarkers has been accepted for publication at the IEEE Journal of Biomedical and Health Informatics.",
            date: "2020-08-27",
            link: "https://arxiv.org/abs/2001.09748"
        },
        {
            title: "We released a new paper on predicting COVID-19 clinical pathways from routinely collected data.",
            date: "2020-05-19",
            link: "https://arxiv.org/abs/2005.08302"
        },
        {
            title: "Our paper on diagnosing Multiple Sclerosis from smartphone-derived digital biomarkers has appeared on arXiv.",
            date: "2020-01-28",
            link: "https://arxiv.org/abs/2001.09748"
        },
        {
            title: "Our latest collaborative paper on crowdsourcing digital biomarkers from smartphone data has been released on bioRxiv.",
            date: "2020-01-13",
            link: "https://www.biorxiv.org/content/10.1101/2020.01.13.904722v1.full"
        },
        {
            title: "Our paper 'Learning Counterfactual Representations for Estimating Individual Dose-Response Curves' has been accepted to AAAI 2020 and will be presented in New York, US.",
            date: "2019-11-14"
        },
        {
            title: "Our paper 'CXPlain: Causal Explanations for Model Interpretation under Uncertainty' has been accepted to NeurIPS 2019 and will be presented in Vancouver, Canada.",
            date: "2019-09-06"
        },
        {
            title: "I joined Roche in Basel, Switzerland and Genentech in South San Francisco, US as a Principal Architect to continue my work on advancing Machine Learning in Personalised Medicine.",
            date: "2019-09-01"
        },
        {
            title: "I successfully defended my PhD thesis 'Learning to Treat, Explain and Diagnose with Neural Networks' at ETH Zurich, Switzerland. Many thanks to my doctoral committee!",
            date: "2019-08-23"
        },
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
        }*/
    ];

    $scope.supervision = [
        {
            title: "Deep Feature Selection.",
            name: "Alexander Norcliffe, University of Cambridge",
            level: "PhD, with Prof. van der Schaar, Pietro Lio and Andres Floto, University of Cambridge",
            date: "2022 - ongoing"
        },
        {
            title: "Probabilistic deep learning for drug discovery and respiratory disease understanding.",
            name: "Pascal Notin, University of Oxford",
            level: "PhD, with Prof. Gal, University of Oxford",
            date: "2021 - 2024"
        },
        {
            title: "A whole-genome sequencing approach to advance precision medicine in ALS.",
            name: "Heather Marriott, King's College London",
            level: "PhD, with Prof. Al-Chalabi, King's College London",
            date: "2021 - 2024"
        },
        {
            title: "Generative Modelling of Medical Time Series.",
            name: "Simon Bing, ETH Zurich",
            level: "MSc, with Dr. Bauer, MPI for Intelligent Systems and Prof. Rätsch, ETH Zurich",
            date: "2021"
        },
        {
            title: "Active Causal Structure Learning.",
            name: "Nino Scherrer, ETH Zurich",
            level: "MSc, with Dr. Bauer and Prof. Schölkopf, MPI for Intelligent Systems",
            date: "2021"
        },
        {
            title: "Privacy-preserving Federated Learning in Medical Imaging.",
            name: "August DuMont Schütte, ETH Zurich",
            level: "MSc, with Dr. Bauer and Prof. Schölkopf, MPI for Intelligent Systems",
            date: "2020"
        },
        {
            title: "Learning to Diagnose Diabetes from Full Body Magnetic Resonance Imaging.",
            name: "Benedikt Dietz, ETH Zurich",
            level: "MSc, with Dr. Bauer and Prof. Schölkopf, MPI for Intelligent Systems",
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
            title: "Outstanding Reviewer Award (top 8%)",
            venue: "Advances in Neural Information Processing Systems (NeurIPS)",
            date: "2021"
        },
        {
            title: "1st Runner-up Research Award",
            venue: "Swiss Society of Biomedical Engineering",
            date: "2020"
        },
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
            title: "Pharma Companies Turn to AI to Speed Up Drug Development, But Hit Hurdles",
            venue: "The Wall Street Journal",
            date: "Feb, 2025",
            link: "https://www.wsj.com/tech/ai/pharma-companies-turn-to-ai-to-speed-up-drug-development-but-hit-hurdles-9e870d8d"
        },
        {
            title: "AI discovers new drugs that could save millions of lives",
            venue: "The Sunday Times",
            date: "Aug, 2024",
            link: "https://www.thetimes.com/business-money/companies/article/ai-discovers-new-drugs-that-could-save-millions-of-lives-and-big-pharmas-time-jtmz7tmfv"
        },
        {
            title: "Shingles vaccines may reduce dementia risk, two large new studies suggest",
            venue: "CNN",
            date: "Jul, 2024",
            link: "https://www.cnn.com/2024/07/30/health/shingles-vaccines-dementia-studies/index.html"
        },
        {
            title: "Shingles vaccine linked with lower dementia risk, study shows",
            venue: "The Washington Post",
            date: "Jul, 2024",
            link: "https://www.washingtonpost.com/wellness/2024/07/30/shingles-vaccine-lower-dementia-risk/"
        },
        {
            title: "GSK researchers use ML to identify hepatitis B subgroups",
            venue: "STAT News",
            date: "Jul, 2023",
            link: "http://schwabpatrick.com/img/stat_hepatitis_b.png"
        },
        {
            title: "Study finds the risks of sharing health care data are low",
            venue: "MIT News",
            date: "Oct, 2022",
            link: "https://news.mit.edu/2022/patient-data-risks-low-1006"
        },
        {
            title: "Artificial intelligence as a Corona warning system",
            venue: "taz",
            date: "Feb, 2021",
            link: "https://taz.de/Kuenstliche-Intelligenz-als-Warnsytem/!5753140/"
        },
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