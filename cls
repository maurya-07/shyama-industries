[1mdiff --git a/src/App.jsx b/src/App.jsx[m
[1mindex ad09839..38cf952 100644[m
[1m--- a/src/App.jsx[m
[1m+++ b/src/App.jsx[m
[36m@@ -74,7 +74,7 @@[m [mconst App = () => {[m
   return ([m
     <div className="min-h-screen bg-black">[m
       {/* Header */}[m
[31m-      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4' : 'bg-black/60 backdrop-blur-md py-4'[m
[32m+[m[32m      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/20 py-4' : 'bg-black/70 backdrop-blur-sm py-4'[m
         }`}>[m
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">[m
           <div className="flex items-center justify-between">[m
[36m@@ -94,7 +94,7 @@[m [mconst App = () => {[m
 [m
             <div className="flex items-center space-x-4">[m
               {/* Contact Button */}[m
[31m-              <button className="hidden sm:flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition-all border border-green-500/30">[m
[32m+[m[32m              <button className="hidden sm:flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">[m
                 <Phone className="w-4 h-4" />[m
                 <span>WhatsApp</span>[m
               </button>[m
[36m@@ -108,7 +108,7 @@[m [mconst App = () => {[m
 [m
           {/* Mobile Navigation */}[m
           {isMenuOpen && ([m
[31m-            <div className="md:hidden mt-4 py-4 border-t border-white/10 bg-black/60 backdrop-blur-xl rounded-lg">[m
[32m+[m[32m            <div className="md:hidden mt-4 py-4 border-t border-white/20 bg-black/80 rounded-lg">[m
               <nav className="flex flex-col space-y-3 px-4">[m
                 <a href="#home" onClick={closeMenu} className="text-gray-300 hover:text-orange-400 font-medium">Home</a>[m
                 <a href="#about" onClick={closeMenu} className="text-gray-300 hover:text-orange-400 font-medium">About</a>[m
[36m@@ -142,11 +142,11 @@[m [mconst App = () => {[m
               </div>[m
 [m
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">[m
[31m-                <button className="flex items-center justify-center space-x-2 bg-orange-500/90 backdrop-blur-sm hover:bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all border border-orange-500/30 shadow-lg">[m
[32m+[m[32m                <button className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg">[m
                   <Phone className="w-5 h-5" />[m
                   <span>Get Quote</span>[m
                 </button>[m
[31m-                <button className="flex items-center justify-center space-x-2 border-2 border-white/20 hover:border-orange-500/50 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-orange-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all">[m
[32m+[m[32m                <button className="flex items-center justify-center space-x-2 border-2 border-white/30 hover:border-orange-500 bg-white/10 text-gray-300 hover:text-orange-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors">[m
                   <span>View Products</span>[m
                   <ArrowRight className="w-5 h-5" />[m
                 </button>[m
[36m@@ -176,11 +176,11 @@[m [mconst App = () => {[m
         </div>[m
 [m
         {/* Stats Section */}[m
[31m-        <div className="bg-black/40 backdrop-blur-xl border-t border-white/10">[m
[32m+[m[32m        <div className="bg-black/60 border-t border-white/20">[m
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">[m
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">[m
               {stats.map((stat, index) => ([m
[31m-                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">[m
[32m+[m[32m                <div key={index} className="text-center bg-white/5 rounded-xl p-6 border border-white/20">[m
                   <div className="flex justify-center mb-4">[m
                     <stat.icon className="w-8 h-8 text-orange-400" />[m
                   </div>[m
[36m@@ -198,7 +198,7 @@[m [mconst App = () => {[m
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">[m
           <div className="grid lg:grid-cols-2 gap-16 items-center">[m
             <div className="order-2 lg:order-1">[m
[31m-              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">[m
[32m+[m[32m              <div className="bg-white/5 rounded-2xl p-4 border border-white/20">[m
                 <img[m
                   src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"[m
                   alt="About Us"[m
[36m@@ -221,11 +221,11 @@[m [mconst App = () => {[m
               </div>[m
 [m
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">[m
[31m-                <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">[m
[32m+[m[32m                <div className="space-y-2 bg-white/5 rounded-lg p-4 border border-white/20">[m
                   <h3 className="text-xl font-semibold text-white">Quality Assured</h3>[m
                   <p className="text-gray-400">All products meet international safety standards</p>[m
                 </div>[m
[31m-                <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">[m
[32m+[m[32m                <div className="space-y-2 bg-white/5 rounded-lg p-4 border border-white/20">[m
                   <h3 className="text-xl font-semibold text-white">Expert Support</h3>[m
                   <p className="text-gray-400">24/7 technical assistance and consultation</p>[m
                 </div>[m
[36m@@ -247,14 +247,14 @@[m [mconst App = () => {[m
 [m
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">[m
             {productList.map((product, index) => ([m
[31m-              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group">[m
[32m+[m[32m              <div key={index} className="bg-white/10 rounded-2xl border border-white/30 shadow-xl overflow-hidden hover:bg-white/15 transition-all duration-300 group">[m
                 <div className="relative h-64 overflow-hidden">[m
                   <img[m
                     src={product.image}[m
                     alt={product.title}[m
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"[m
                   />[m
[31m-                  <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">[m
[32m+[m[32m                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">[m
                     {product.category}[m
                   </div>[m
                 </div>[m
[36m@@ -268,7 +268,7 @@[m [mconst App = () => {[m
                     </div>[m
                   </div>[m
                   <p className="text-gray-300 mb-4">{product.desc}</p>[m
[31m-                  <button className="w-full bg-orange-500/90 backdrop-blur-sm hover:bg-orange-500 text-white py-3 rounded-lg font-medium transition-all border border-orange-500/30">[m
[32m+[m[32m                  <button className="w-full bg-orange-500 hover:bg-oran