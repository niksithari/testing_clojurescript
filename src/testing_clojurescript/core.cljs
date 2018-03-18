(ns testing_clojurescript.core
    (:require
     [rum.core :as rum]
     [goog.dom :as gdom]
     )

    )

(enable-console-print!)

(defn find-child-node [parent-node query-string]
  "Find the first child element that satisfies a css selector"
  (try
    (first (array-seq  (.querySelectorAll parent-node query-string)))
    (catch js/Object e (str "Error :" e))))


(println "This text is printed from src/testing_clojurescript/core.cljs. Go ahead and edit it and see reloading in action.")


(rum/defc label [n text]
  [:div {:style {:color "blue" :font-size "30px" }}
   (  for [ i (range n)]
     [:div {:key (str "niklo perneis ton poulo " i " fores " )} text ]) ])


(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)



(rum/mount (label 5 "abc") (gdom/getElement "app") )
