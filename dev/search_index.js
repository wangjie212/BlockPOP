var documenterSearchIndex = {"docs":
[{"location":"ncpop/#Noncommutative-polynomial-optimization","page":"Noncommutative Polynomial Optimization","title":"Noncommutative polynomial optimization","text":"","category":"section"},{"location":"ncpop/","page":"Noncommutative Polynomial Optimization","title":"Noncommutative Polynomial Optimization","text":"TSSOS supports noncommutative polynomial (eigenvalue or trace) optimization involving noncommuting variables. See also NCTSSOS.","category":"page"},{"location":"ncpop/","page":"Noncommutative Polynomial Optimization","title":"Noncommutative Polynomial Optimization","text":"nctssos_first\r\nnctssos_higher!\r\ncs_nctssos_first\r\ncs_nctssos_higher!","category":"page"},{"location":"ncpop/#TSSOS.NCTSSOS.nctssos_first","page":"Noncommutative Polynomial Optimization","title":"TSSOS.NCTSSOS.nctssos_first","text":"opt,data = nctssos_first(f::Polynomial{false, T} where T<:Number, x::Vector{PolyVar{false}};\n    newton=true, reducebasis=true, TS=\"block\", obj=\"eigen\", merge=false, md=3, QUIET=false)\n\nCompute the first step of the NCTSSOS hierarchy for unconstrained noncommutative polynomial optimization. If newton=true, then compute a monomial basis by the Newton chip method. If reducebasis=true, then remove monomials from the monomial basis by diagonal inconsistency. If TS=\"block\", use maximal chordal extensions; if TS=\"MD\", use approximately smallest chordal extensions. If obj=\"eigen\", minimize the eigenvalue; if obj=\"trace\", then minimize the trace. If merge=true, perform the PSD block merging. Return the optimum and other auxiliary data.\n\nArguments\n\nf: the objective function for unconstrained noncommutative polynomial optimization.\nx: the set of noncommuting variables.\nmd: the tunable parameter for merging blocks.\n\n\n\n\n\n","category":"function"},{"location":"ncpop/#TSSOS.NCTSSOS.nctssos_higher!","page":"Noncommutative Polynomial Optimization","title":"TSSOS.NCTSSOS.nctssos_higher!","text":"opt,data = nctssos_higher!(data, TS=\"block\", merge=false, md=3, QUIET=false)\n\nCompute higher steps of the NCTSSOS hierarchy. Return the optimum and other auxiliary data.\n\n\n\n\n\n","category":"function"},{"location":"ncpop/#TSSOS.NCTSSOS.cs_nctssos_first","page":"Noncommutative Polynomial Optimization","title":"TSSOS.NCTSSOS.cs_nctssos_first","text":"opt,data = cs_nctssos_first(pop, x, d; numeq=0, CS=\"MF\", TS=\"block\", merge=false, md=3,\nQUIET=false, obj=\"eigen\", solve=true)\n\nCompute the first step of the CS-NCTSSOS hierarchy for constrained noncommutative polynomial optimization with relaxation order d. Return the optimum and other auxiliary data.\n\nArguments\n\npop: the vector of the objective function, inequality constraints, and equality constraints.\nx: the set of noncommuting variables.\nd: the relaxation order of the moment-SOHS hierarchy.\nnumeq: the number of equality constraints.\n\n\n\n\n\nopt,data = cs_nctssos_first(supp::Vector{Vector{Vector{UInt16}}}, coe, n::Int, d::Int; numeq=0,\nCS=\"MF\", TS=\"block\", merge=false, md=3, QUIET=false, obj=\"eigen\", solve=true)\n\nCompute the first step of the CS-NCTSSOS hierarchy for constrained noncommutative polynomial optimization with relaxation order d. Here the polynomial optimization problem is defined by supp and coe, corresponding to the supports and coeffients of pop respectively. Return the optimum and other auxiliary data.\n\nArguments\n\nsupp: the supports of the polynomial optimization problem.\ncoe: the coeffients of the polynomial optimization problem.\nd: the relaxation order of the moment-SOHS hierarchy.\nnumeq: the number of equality constraints.\n\n\n\n\n\n","category":"function"},{"location":"ncpop/#TSSOS.NCTSSOS.cs_nctssos_higher!","page":"Noncommutative Polynomial Optimization","title":"TSSOS.NCTSSOS.cs_nctssos_higher!","text":"opt,data = cs_nctssos_higher!(data; TS=\"block\", QUIET=false, merge=false, md=3, solve=true)\n\nCompute higher steps of the CS-NCTSSOS hierarchy. Return the optimum and other auxiliary data.\n\n\n\n\n\n","category":"function"},{"location":"#TSSOS","page":"Home","title":"TSSOS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TSSOS is a sparse polynomial optimization package based on the sparsity adapted moment-SOS hierarchies, which can fully exploit the sparsity in the problem data including correlative (variable) sparsity and term sparsity.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Jie Wang,  LAAS-CNRS.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TSSOS is simply installed by running","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/wangjie212/TSSOS","category":"page"},{"location":"#Related-packages","page":"Home","title":"Related packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DynamicPolynomials: Polynomial definition\nMultivariatePolynomials: Polynomials manipulations\nNCTSSOS: Noncommutative polynomial optimization\nChordalGraph: Chordal graphs and chordal extentions\nSparseJSR: Computing joint spetral radius","category":"page"},{"location":"#References","page":"Home","title":"References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TSSOS: A Moment-SOS hierarchy that exploits term sparsity, Jie Wang, Victor Magron and Jean B. Lasserre, 2020.\nChordal-TSSOS: a moment-SOS hierarchy that exploits term sparsity with chordal extension, Jie Wang, Victor Magron and Jean B. Lasserre, 2020.\nCS-TSSOS: Correlative and term sparsity for large-scale polynomial optimization, Jie Wang, Victor Magron, Jean B. Lasserre and Ngoc H. A. Mai, 2020.\nExploiting term sparsity in Noncommutative Polynomial Optimization, Jie Wang and Victor Magron, 2020.","category":"page"},{"location":"spop/#Polynomial-optimization","page":"Polynomial Optimization","title":"Polynomial optimization","text":"","category":"section"},{"location":"spop/","page":"Polynomial Optimization","title":"Polynomial Optimization","text":"tssos_first\r\ntssos_higher!\r\ncs_tssos_first\r\ncs_tssos_higher!\r\nrefine_sol","category":"page"},{"location":"spop/#TSSOS.tssos_first","page":"Polynomial Optimization","title":"TSSOS.tssos_first","text":"opt,sol,data = tssos_first(f, x; nb=0, newton=true, reducebasis=false, TS=\"block\", merge=false,\nmd=3, solver=\"Mosek\", QUIET=false, solve=true, MomentOne=false, solution=false, tol=1e-4)\n\nCompute the first step of the TSSOS hierarchy for unconstrained polynomial optimization. If newton=true, then compute a monomial basis by the Newton polytope method. If reducebasis=true, then remove monomials from the monomial basis by diagonal inconsistency. If TS=\"block\", use maximal chordal extensions; if TS=\"MD\", use approximately smallest chordal extensions. If merge=true, perform the PSD block merging. If MomentOne=true, add an extra first order moment matrix to the moment relaxation. Return the optimum, the (near) optimal solution (if solution=true) and other auxiliary data.\n\nArguments\n\nf: the objective function for unconstrained polynomial optimization.\nx: the set of variables.\nnb: the number of binary variables in x.\nmd: the tunable parameter for merging blocks.\ntol: the relative tolerance to certify global optimality.\n\n\n\n\n\nopt,sol,data = tssos_first(pop, x, d; nb=0, numeq=0, quotient=true, basis=nothing,\nreducebasis=false, TS=\"block\", merge=false, md=3, solver=\"Mosek\", QUIET=false, solve=true,\nMomentOne=false, solution=false, tol=1e-4)\n\nCompute the first step of the TSSOS hierarchy for constrained polynomial optimization with relaxation order d. If quotient=true, then exploit the quotient ring structure defined by the equality constraints. Return the optimum, the (near) optimal solution (if solution=true) and other auxiliary data.\n\nArguments\n\npop: the vector of the objective function, inequality constraints, and equality constraints.\nx: the set of variables.\nd: the relaxation order of the moment-SOS hierarchy.\nnb: the number of binary variables in x.\nmd: the tunable parameter for merging blocks.\nnumeq: the number of equality constraints.\n\n\n\n\n\n","category":"function"},{"location":"spop/#TSSOS.tssos_higher!","page":"Polynomial Optimization","title":"TSSOS.tssos_higher!","text":"opt,sol,data = tssos_higher!(data; TS=\"block\", merge=false, md=3, QUIET=false, solve=true,\nMomentOne=false, solution=false, tol=1e-4)\n\nCompute higher steps of the TSSOS hierarchy. Return the optimum, the (near) optimal solution (if solution=true) and other auxiliary data.\n\n\n\n\n\n","category":"function"},{"location":"spop/#TSSOS.cs_tssos_first","page":"Polynomial Optimization","title":"TSSOS.cs_tssos_first","text":"opt,sol,data = cs_tssos_first(pop, x, d; nb=0, numeq=0, foc=100, CS=\"MF\", minimize=false,\nassign=\"first\", TS=\"block\", merge=false, md=3, solver=\"Mosek\", QUIET=false, solve=true, solution=false,\nMomentOne=true, tol=1e-4)\n\nCompute the first step of the CS-TSSOS hierarchy for constrained polynomial optimization with relaxation order d. Return the optimum, the (near) optimal solution (if solution=true) and other auxiliary data.\n\nArguments\n\npop: the vector of the objective function, inequality constraints, and equality constraints.\nx: the set of variables.\nd: the relaxation order of the moment-SOS hierarchy.\nnb: the number of binary variables in x.\nmd: the tunable parameter for merging blocks.\nnumeq: the number of equality constraints.\n\n\n\n\n\nopt,sol,data = cs_tssos_first(supp::Vector{Vector{Vector{UInt16}}}, coe, n, d; numeq=0,\nnb=0, foc=100, CS=\"MF\", minimize=false, assign=\"first\", TS=\"block\", merge=false, md=3,\nQUIET=false, solver=\"Mosek\", solve=true, solution=false, MomentOne=true, tol=1e-4)\n\nCompute the first step of the CS-TSSOS hierarchy for constrained polynomial optimization with relaxation order d. Here the polynomial optimization problem is defined by supp and coe, corresponding to the supports and coeffients of pop respectively. Return the optimum, the (near) optimal solution (if solution=true) and other auxiliary data.\n\nArguments\n\nsupp: the supports of the polynomial optimization problem.\ncoe: the coeffients of the polynomial optimization problem.\nd: the relaxation order of the moment-SOS hierarchy.\nnumeq: the number of equality constraints.\n\n\n\n\n\nopt,sol,data = cs_tssos_first(supp::Vector{Vector{Vector{Vector{UInt16}}}}, coe::Vector{Vector{ComplexF64}},\nn, d, dg; numeq=0, foc=100, CS=\"MF\", minimize=false, assign=\"first\", TS=\"block\", merge=false, md=3,\nQUIET=false, solve=true, MomentOne=true)\n\nCompute the first step of the CS-TSSOS hierarchy for constrained complex polynomial optimization with relaxation order d. Here the complex polynomial optimization problem is defined by supp and coe, corresponding to the supports and coeffients of pop respectively.\n\nArguments\n\nsupp: the supports of the complex polynomial optimization problem.\ncoe: the coeffients of the complex polynomial optimization problem.\nd: the relaxation order of the moment-SOHS hierarchy.\nnumeq: the number of equality constraints.\n\n\n\n\n\n","category":"function"},{"location":"spop/#TSSOS.cs_tssos_higher!","page":"Polynomial Optimization","title":"TSSOS.cs_tssos_higher!","text":"opt,sol,data = cs_tssos_higher!(data; TS=\"block\", merge=false, md=3, QUIET=false, solve=true,\nsolution=false, MomentOne=false)\n\nCompute higher steps of the CS-TSSOS hierarchy. Return the optimum, the (near) optimal solution (if solution=true) and other auxiliary data.\n\n\n\n\n\n","category":"function"},{"location":"spop/#TSSOS.refine_sol","page":"Polynomial Optimization","title":"TSSOS.refine_sol","text":"ref_sol,upper_bound,rel_gap = refine_sol(opt, sol, data, QUIET=false, tol=1e-4)\n\nRefine the obtained solution by a local solver. Return the refined solution, the upper bound given by the local solver and the relative optimality gap.\n\n\n\n\n\n","category":"function"}]
}
