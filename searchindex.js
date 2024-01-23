Search.setIndex({"docnames": ["appendix/multiplication", "dft/complex", "dft/convolution", "dft/dft", "dft/fft", "dft/frequency", "eigenvalues/computing_eigenvalues", "eigenvalues/diagonalization", "eigenvalues/svd", "index", "notebooks/01_linear_systems", "notebooks/02_LU_decomposition", "notebooks/03_polynomial_interpolation", "notebooks/04_spline_interpolation", "notebooks/05_finite_difference_method", "notebooks/06_least_squares_regression", "notebooks/07_pca", "notebooks/08_deblurring_images", "notebooks/09_computed_tomography", "notebooks/10_computing_eigenvalues", "notebooks/12_fft", "orthogonality/complement", "orthogonality/least_squares", "orthogonality/projection", "orthogonality/qr", "orthogonality/subspaces", "systems/error", "systems/interpolation", "systems/lu", "systems/odes"], "filenames": ["appendix/multiplication.md", "dft/complex.md", "dft/convolution.md", "dft/dft.md", "dft/fft.md", "dft/frequency.md", "eigenvalues/computing_eigenvalues.md", "eigenvalues/diagonalization.md", "eigenvalues/svd.md", "index.md", "notebooks/01_linear_systems.ipynb", "notebooks/02_LU_decomposition.ipynb", "notebooks/03_polynomial_interpolation.ipynb", "notebooks/04_spline_interpolation.ipynb", "notebooks/05_finite_difference_method.ipynb", "notebooks/06_least_squares_regression.ipynb", "notebooks/07_pca.ipynb", "notebooks/08_deblurring_images.ipynb", "notebooks/09_computed_tomography.ipynb", "notebooks/10_computing_eigenvalues.ipynb", "notebooks/12_fft.ipynb", "orthogonality/complement.md", "orthogonality/least_squares.md", "orthogonality/projection.md", "orthogonality/qr.md", "orthogonality/subspaces.md", "systems/error.md", "systems/interpolation.md", "systems/lu.md", "systems/odes.md"], "titles": ["Matrix Multiplication", "Complex Vectors", "Convolution and Filtering", "Discrete Fourier Transform", "Fast Fourier Transform", "Frequency, Amplitude and Phase", "Computing Eigenvalues", "Diagonalization", "Singular Value Decomposition", "MATH 307 Applied Linear Algebra", "Linear Systems of Equations", "LU Decomposition", "Polynomial Interpolation", "Natural Cubic Spline Interpolation", "Finite Difference Method", "Fitting Models to Data", "Principal Component Analysis", "Deblurring Images", "Computed Tomography", "Computing Eigenvalues", "Discrete Fourier Transform", "Orthogonal Complement", "Least Squares Approximation", "Orthogonal Projection", "QR Decomposition", "Subspaces", "Error Analysis", "Interpolation", "LU Decomposition", "Differential Equations"], "terms": {"let": [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29], "A": [0, 1, 5, 6, 7, 8, 11, 12, 13, 14, 15, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29], "b": [0, 1, 6, 7, 8, 11, 12, 13, 14, 15, 17, 18, 19, 22, 25, 26, 27, 28, 29], "m": [0, 2, 4, 7, 8, 11, 18, 21, 22, 23, 24, 25, 26, 28], "time": [0, 2, 6, 7, 8, 15, 16, 17, 19, 21, 22, 24, 25, 26, 28], "n": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "matric": [0, 7, 8, 9, 11, 15, 18, 26, 28], "If": [0, 1, 3, 6, 7, 8, 21, 22, 24, 25, 26, 28], "boldsymbol": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28, 29], "x": [0, 2, 3, 4, 5, 6, 7, 8, 11, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "all": [0, 1, 3, 6, 7, 8, 11, 13, 19, 21, 22, 23, 24, 25, 26, 27, 28], "mathbb": [0, 1, 2, 3, 4, 5, 7, 8, 16, 21, 22, 23, 24, 25, 26, 27, 28], "r": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29], "proof": [0, 1, 2, 3, 4, 5, 7, 8, 21, 22, 24, 25, 26, 27, 28], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29], "standard": [0, 1, 3, 15], "basi": [0, 5, 8, 16, 21, 23, 24, 27], "e": [0, 1, 3, 4, 5, 6, 8, 17, 18, 28], "_1": [0, 1, 3, 5, 6, 7, 8, 16, 21, 23, 24, 25, 26, 27, 28], "begin": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29], "bmatrix": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29], "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "vdot": [0, 1, 2, 3, 4, 5, 8, 10, 11, 12, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29], "end": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29], "_2": [0, 3, 6, 7, 8, 16, 21, 23, 24, 25, 26, 27], "dot": [0, 1, 3, 6, 7, 8, 10, 12, 13, 15, 16, 21, 22, 23, 24, 25, 26, 27, 28, 29], "_n": [0, 1, 3, 5, 6, 7, 8, 16, 24, 25, 27, 28], "In": [0, 2, 6, 7, 8, 15, 21, 22, 24, 25, 26, 27, 28, 29], "other": [0, 2, 6, 7, 8, 19, 21, 25, 26, 27, 28, 29], "word": [0, 2, 6, 7, 8, 21, 25, 26, 27, 28], "_k": [0, 3, 4, 5, 6, 8, 16, 17, 19, 21, 23, 24, 27, 28], "vector": [0, 2, 3, 4, 5, 6, 7, 8, 15, 16, 18, 19, 22, 25, 27], "index": [0, 2, 3, 5, 10, 11, 18, 28], "k": [0, 2, 3, 4, 5, 6, 7, 8, 12, 13, 16, 17, 18, 19, 20, 21, 23, 26, 27, 28, 29], "everywher": 0, "els": [0, 11], "Then": [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 21, 23, 25, 26, 27, 28, 29], "equal": [0, 2, 3, 5, 7, 8, 12, 16, 21, 22, 25, 26, 27, 28, 29], "th": [0, 3, 4, 8, 27, 28], "column": [0, 3, 6, 7, 8, 11, 15, 16, 17, 21, 23, 24, 25, 27, 28], "sinc": [0, 3, 5, 6, 7, 8, 19, 21, 25, 26, 27, 28], "each": [0, 1, 3, 5, 6, 7, 8, 11, 12, 13, 14, 16, 18, 19, 21, 23, 27, 28, 29], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 15, 17, 18, 19, 21, 22, 23, 25, 26, 27, 28, 29], "see": [0, 1, 2, 4, 6, 7, 8, 15, 19, 21, 22, 24, 26, 27, 28, 29], "ar": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29], "therefor": [0, 2, 3, 4, 5, 6, 7, 8, 11, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29], "p": [0, 6, 7, 8, 12, 13, 14, 16, 18, 19, 23, 24, 26, 27, 28, 29], "cdot": [0, 1, 2, 3, 6, 7, 8, 10, 12, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29], "ab": [0, 5, 7, 19, 20], "can": [0, 1, 3, 4, 5, 8, 15, 18, 19, 21, 25, 26, 27, 28, 29], "written": [0, 25], "number": [1, 3, 4, 6, 7, 8, 12, 15, 17, 19, 21, 23, 25, 27, 28, 29], "repres": [1, 3, 5, 6, 8, 10, 15, 17, 18, 27], "form": [1, 4, 5, 8, 14, 15, 21, 22, 25, 27, 28, 29], "z": [1, 6, 17, 21], "i": [1, 3, 4, 5, 6, 7, 8, 10, 11, 18, 21, 22, 23, 24, 26, 27, 28], "also": [1, 4, 5, 8, 19, 21, 23, 25, 27], "polar": 1, "theta": [1, 16, 21], "set": [1, 8, 15, 20, 21, 23, 25, 26, 27], "length": [1, 3, 4, 8, 16, 26, 27], "entri": [1, 3, 4, 5, 6, 7, 8, 11, 25, 26, 27, 28], "space": [1, 12, 24, 25, 27, 29], "c": [1, 2, 3, 4, 5, 6, 8, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 25, 26, 27, 28], "inner": [1, 7, 21], "product": [1, 2, 7, 8, 21, 27], "langl": [1, 3, 4, 7, 8, 21, 23, 24], "u": [1, 2, 7, 11, 21, 23, 24, 25, 27, 28], "v": [1, 2, 6, 7, 8, 10, 21, 23, 24, 25, 27], "rangl": [1, 3, 4, 7, 8, 21, 23, 24], "t": [1, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 27, 28, 29], "overlin": [1, 3, 5, 7], "where": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 15, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29], "sqrt": [1, 3, 4, 5, 6, 8, 19, 21, 23, 24, 26], "satisfi": [1, 3, 5, 8, 21, 25, 26, 27], "2": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "real": [1, 3, 7, 8, 19, 20], "call": [1, 4, 6, 7, 8, 11, 12, 15, 21, 22, 23, 24, 25, 26, 27, 28], "part": [1, 4], "imaginari": 1, "write": [1, 3, 4, 8, 11, 21, 22, 24, 29], "mathrm": [1, 2, 3, 4, 5, 7, 8, 21, 22, 23, 24, 25, 26, 27, 28], "re": 1, "im": 1, "arctan": 1, "visual": [1, 4, 8, 11, 18], "dimension": [1, 21], "euler": 1, "s": [1, 4, 8, 11, 12, 13, 15, 16, 17, 18, 21, 25, 27], "formula": [1, 4, 5, 7, 8, 14, 27, 29], "co": [1, 3, 5, 14, 16, 20, 21, 22, 29], "sin": [1, 3, 5, 12, 13, 16, 22, 29], "ib": 1, "modulu": 1, "angl": [1, 5, 16, 18, 20, 21], "argument": [1, 5], "arg": 1, "conjug": 1, "invers": [1, 3, 8, 18, 28], "given": [1, 2, 3, 5, 6, 8, 12, 13, 22, 23, 24, 25, 26, 27, 28], "frac": [1, 3, 4, 5, 6, 7, 8, 14, 16, 19, 23, 24, 26, 27, 29], "v_1": [1, 2], "v_n": 1, "u_1": [1, 2, 21, 25], "u_n": 1, "geq": [1, 8, 22, 25, 26], "onli": [1, 4, 6, 7, 8, 21, 25, 26, 27, 28, 29], "zero": [1, 11, 14, 17, 23, 25, 28], "norm": [1, 10, 19, 21], "orthogon": [1, 3, 7, 8, 16, 22], "transpos": 1, "matrix": [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 19, 21, 22, 23, 24, 25, 27, 28, 29], "note": [1, 3, 4, 6, 8, 22, 23, 26, 27, 28, 29], "hermitian": 1, "unitari": [1, 3], "discret": [2, 5, 9, 14, 29], "fourier": [2, 5, 9], "transform": [2, 5, 9, 26, 28], "two": [2, 4, 7, 8, 15, 16, 25, 27, 28], "signal": [2, 3, 4, 5, 9], "elementwis": 2, "those": 2, "domain": [2, 14, 29], "correspond": [2, 6, 7, 8, 12, 18, 19, 26, 28, 29], "via": 2, "dft": [2, 3, 4, 20], "multipl": [2, 3, 6, 7, 8, 17, 19, 21, 23, 24, 25, 28], "frequenc": 2, "y": [2, 3, 4, 5, 6, 8, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 25, 26, 27, 28, 29], "sum_": [2, 3, 4, 8, 16, 21, 26, 29], "interpret": 2, "us": [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 21, 22, 24, 26, 27, 28, 29], "modular": 2, "arithmet": 2, "outsid": 2, "interv": [2, 15, 27], "add": [2, 28, 29], "subtract": [2, 16, 29], "until": [2, 4], "insid": 2, "wikipedia": [2, 4, 6, 8, 22, 24, 26, 27, 28, 29], "comput": [2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 15, 16, 17, 21, 22, 23, 24, 26, 27, 28, 29], "align": [2, 3, 4, 5, 6, 7, 8, 12, 21, 23, 24, 26, 27, 28, 29], "3": [2, 3, 4, 5, 6, 7, 8, 10, 11, 15, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "hadamard": 2, "circ": 2, "u_0": [2, 28], "u_": [2, 28], "v_0": 2, "v_": 2, "u_0v_0": 2, "u_1v_1": 2, "denot": [2, 14, 21, 27, 28, 29], "from": [2, 3, 5, 6, 8, 12, 13, 15, 16, 17, 18, 20, 21, 23, 27, 28, 29], "definit": [2, 3, 6, 8, 26], "omega_n": [2, 3, 4, 5], "project": [3, 7, 8, 16, 22], "onto": [3, 7, 8, 16, 22, 24], "f": [3, 4, 5, 18, 22, 27, 29], "_0": [3, 6, 19], "_": [3, 4, 5, 6, 8, 19, 21, 22, 23, 24, 26, 27], "an": [3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 18, 19, 22, 23, 24, 25, 27, 28, 29], "complex": [3, 5, 7], "omega": [3, 5], "pi": [3, 4, 5, 12, 13, 14, 16, 20, 21, 22, 29], "displaystyl": [3, 8, 26, 29], "left": [3, 4, 5, 6, 7, 8, 10, 11, 14, 15, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29], "right": [3, 4, 5, 6, 7, 8, 10, 11, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29], "integ": [3, 5, 27], "nk": [3, 4, 5], "sum": [3, 4, 5, 6, 8, 12, 15, 20, 22], "geometr": [3, 7], "seri": [3, 29], "so": [3, 5, 6, 7, 8, 11, 16, 18, 19, 21, 27, 28, 29], "have": [3, 5, 7, 8, 15, 18, 19, 21, 22, 26, 27, 28, 29], "kn": 3, "0s": [3, 8], "except": [3, 28], "leftarrow": 3, "text": [3, 4, 6, 8, 21, 23, 25, 26], "python": [3, 5, 6, 9, 11, 16], "first": [3, 7, 8, 15, 16, 21, 24, 25, 27, 28, 29], "For": [3, 4, 7, 8, 14, 27, 28, 29], "exampl": [3, 4, 6, 7, 18, 23, 24, 27, 28, 29], "hspace": [3, 4, 5, 6, 7, 8, 10, 14, 21, 22, 23, 24, 25, 26, 27, 28, 29], "10mm": [3, 4, 5, 6, 7, 8, 10, 14, 21, 22, 23, 24, 25, 26, 27, 28, 29], "posit": [3, 5, 6, 8, 10, 27], "renewcommand": [3, 4, 5, 27], "arraystretch": [3, 4, 5, 27], "5": [3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 25, 26, 27, 28, 29], "k_n": [3, 5], "2k": [3, 5], "omega_2": 3, "arrai": [3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 19, 21, 22, 23, 24, 25, 27, 28, 29], "omega_3": 3, "4": [3, 4, 5, 6, 8, 9, 10, 11, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29], "omega_4": 3, "_3": [3, 6, 7, 8, 21, 23, 24, 25], "ell": [3, 21, 25], "cl": 3, "otherwis": [3, 26], "show": [3, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 24, 26, 27], "previou": [3, 5, 6, 7, 23, 29], "proposit": [3, 5], "clearli": [3, 6, 8, 21], "By": [3, 7, 8, 26], "f_n": [3, 4, 22], "t_0": [3, 12, 13, 14, 15, 27, 29], "t_1": [3, 12, 15, 22, 27, 29], "t_": [3, 13, 27], "25": [3, 4, 29], "ddot": [3, 4, 7, 8, 10, 11, 12, 14, 22, 24, 25, 26, 27, 28, 29], "expand": 3, "term": [3, 4, 5, 6, 8, 21, 28, 29], "coeffici": [3, 8, 12, 13, 15, 22, 27, 28], "respect": [3, 4, 7, 27], "up": 3, "studi": [3, 5], "sound": [3, 4, 5], "imag": [3, 5, 8, 16, 25, 26], "ani": [3, 5, 6, 7, 8, 11, 21, 24, 25, 26, 27, 28, 29], "kind": [3, 5, 27, 29], "inform": [3, 5, 8, 16, 27], "context": [3, 5], "refer": [3, 5], "notat": [3, 5, 14, 15, 22, 26, 27, 28, 29], "x_0": [3, 4, 5], "x_1": [3, 4, 5, 21, 25, 26, 28], "x_2": [3, 4, 5, 25, 28], "x_": [3, 4, 5, 28], "x_n": [3, 4, 5, 21, 25, 26, 28], "nn": 3, "fact": [3, 6, 24], "when": [3, 7, 8, 12, 22, 27, 28], "idft": 3, "t_n": [3, 12, 13, 15, 27], "howev": [3, 7, 8, 16, 18, 25, 28], "determin": [3, 6, 7, 8, 21, 23, 25, 26, 27, 28, 29], "whether": [3, 6, 7, 8, 21, 23, 25, 26, 27, 28, 29], "statement": [3, 6, 7, 8, 21, 23, 25, 26, 27, 28, 29], "true": [3, 5, 6, 7, 8, 11, 12, 13, 14, 16, 20, 21, 23, 25, 26, 27, 28, 29], "fals": [3, 6, 7, 8, 11, 16, 21, 23, 25, 26, 27, 28, 29], "even": [3, 4], "ha": [3, 4, 5, 6, 7, 15, 16, 19, 25, 26, 27, 28], "suppos": [3, 6, 7, 8, 15, 19, 22, 26, 27, 28, 29], "9": [3, 10, 16, 27, 28, 29], "valu": [3, 5, 6, 12, 13, 16, 17, 18, 19, 22, 26, 27, 28, 29], "indic": [3, 4], "5mm": [3, 5, 6, 8, 23, 24, 25, 28, 29], "2i": [3, 4, 5], "6": [3, 5, 6, 8, 10, 11, 13, 16, 18, 19, 23, 25, 27, 28, 29], "3i": [3, 5, 7], "8": [3, 4, 5, 6, 8, 11, 12, 15, 16, 18, 19, 20, 27, 29], "odd": [3, 4], "find": [3, 5, 6, 7, 8, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29], "fft": [4, 5], "algorithm": [4, 6, 7, 16, 19, 23, 24, 28], "effici": [4, 6, 16, 24, 27, 28], "commonli": [4, 26], "sampl": [4, 5, 15, 18], "44": 4, "khz": 4, "audio": 4, "one": [4, 6, 7, 28, 29], "second": [4, 8, 14, 21, 28], "requir": [4, 27, 29], "44100": [4, 20], "which": [4, 6, 7, 8, 11, 12, 15, 16, 19, 21, 22, 23, 25, 27, 28], "approxim": [4, 6, 8, 9, 10, 14, 19, 29], "billion": 4, "yike": [4, 12, 27], "need": [4, 8, 17, 18, 27, 28], "practic": [4, 6], "assum": [4, 7, 8, 22, 26], "d_n": [4, 26, 27], "rr": [4, 8, 24, 28], "l": [4, 11, 25, 27, 28], "consist": [4, 10, 22, 27, 28], "x_3": [4, 6, 28], "look": [4, 8, 15, 18], "split": 4, "2m": 4, "2mk": 4, "omega_": 4, "mk": 4, "leq": [4, 21, 26, 27], "underbrac": 4, "mn": 4, "again": [4, 8, 15], "put": 4, "togeth": [4, 29], "get": [4, 6, 8, 27, 28, 29], "thi": [4, 5, 6, 7, 8, 9, 12, 15, 19, 21, 26, 27, 28, 29], "coolei": 4, "tukei": 4, "point": [4, 8, 12, 13, 15, 16, 22, 23, 27, 29], "smaller": [4, 8], "faster": [4, 6], "And": [4, 18], "keep": [4, 11], "appli": [4, 6, 24, 28, 29], "size": [4, 8, 10, 12, 13, 14, 17, 19, 20, 27, 28, 29], "power": [4, 7], "procedur": 4, "symmetri": 4, "reduc": [4, 28], "further": [4, 5], "cc": [4, 6], "x_4": 4, "stackrel": 4, "longrightarrow": [4, 27, 28], "x_6": 4, "x_5": 4, "x_7": 4, "d_8": 4, "rrrr": [4, 22, 28, 29], "f_4": 4, "verifi": [4, 6, 8, 11, 13, 21, 28], "same": [4, 5, 6, 8, 11, 15, 17, 19, 21, 24, 28, 29], "result": [4, 6, 13, 15, 16, 18, 19, 26, 27, 28, 29], "mathbf": [5, 11, 14, 15, 16, 18, 19, 24], "phi": [5, 20], "period": 5, "per": 5, "here": [5, 28], "7": [5, 10, 11, 15, 19, 27, 28, 29], "consid": [5, 6, 7, 11, 12, 13, 14, 25, 26, 27, 28, 29], "sketch": 5, "now": [5, 7, 8, 11, 13, 15, 19, 21, 29], "follow": [5, 18, 21, 27, 28], "properti": [5, 9, 21, 25, 26], "last": [5, 22, 29], "prove": [5, 8, 21, 26], "similarli": [5, 26], "trigonometr": 5, "ident": [5, 7, 8, 23, 28], "alpha": [5, 6, 14, 15, 16, 29], "beta": [5, 14, 29], "magnitud": [5, 20, 26], "plot": [5, 10, 11, 12, 13, 14, 15, 16, 29], "versu": 5, "4i": 5, "_7": 5, "what": [5, 6, 12, 15, 22], "occur": [5, 7, 8, 22], "mai": [5, 6, 7, 8, 26], "rewrit": [5, 29], "a_1": [5, 27], "phi_1": [5, 27], "a_3": [5, 27], "phi_3": 5, "run": [5, 6], "code": 5, "differ": [5, 7, 8, 11, 15, 18, 22, 26, 27, 28], "100": [5, 8, 12, 14, 19, 20], "np": [5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "random": [5, 6, 12, 13, 15, 16, 17, 18, 20], "rand": [5, 15], "plt": [5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "stem": [5, 20], "use_line_collect": [5, 20], "describ": [5, 6, 8, 25, 27, 28], "explain": [5, 25, 26, 27, 29], "why": [5, 25, 28, 29], "gener": [5, 8, 14, 15, 21, 22, 25, 26, 29], "shape": [5, 11, 15, 16, 17, 18], "recal": 5, "uniform": [5, 6], "distribut": [5, 6, 15, 21], "match": 5, "its": [5, 21, 26, 29], "It": 6, "root": [6, 7, 8, 21], "characterist": [6, 7, 8], "polynomi": [6, 7, 8, 13, 29], "c_a": [6, 7], "instead": 6, "sever": [6, 22], "numer": [6, 29], "without": [6, 19, 25, 28], "squar": [6, 9, 10, 15, 17, 18, 21, 26, 28], "lambda": [6, 7, 8, 19], "domin": [6, 8, 19], "algebra": [6, 7, 10], "mu": 6, "lambda_1": [6, 7, 8, 19], "lambda_n": [6, 7, 19], "eigenvector": [6, 8, 19], "linear": [6, 7, 8, 13, 14, 22, 26, 27, 28, 29], "combin": [6, 17, 25, 28], "c_1": [6, 8, 12, 14, 15, 22, 25, 27, 29], "c_n": [6, 8, 22, 27], "c_2": [6, 12, 14, 15, 22, 27, 29], "lambda_2": [6, 7, 8], "rightarrow": [6, 7, 8, 22, 27, 29], "infti": [6, 19, 26, 29], "becaus": [6, 7, 12, 25, 29], "lambda_i": [6, 7, 8], "veri": [6, 12, 26, 27, 29], "larg": [6, 7, 8, 12, 18, 26, 27], "increas": [6, 12, 19, 27, 29], "help": 6, "normal": [6, 8, 16, 19], "step": [6, 19, 29], "simplest": [6, 27], "wai": [6, 7, 8, 15, 22, 24, 26, 27], "divid": 6, "max": [6, 19, 26], "give": [6, 8, 12, 28, 29], "choos": [6, 14, 19, 21, 29], "start": [6, 12, 19], "_4": [6, 25], "75": [6, 16, 19, 27], "67": 6, "approx": [6, 14, 22, 27, 29], "actual": [6, 18], "4142": 6, "particular": [6, 18, 24, 25, 26, 28], "sequenc": [6, 28], "lambda_k": [6, 7], "converg": [6, 19], "order": [6, 8, 14, 18, 28], "decreas": [6, 8, 17, 29], "equival": [6, 8, 28, 29], "smallest": [6, 8, 19], "At": 6, "solv": [6, 7, 8, 11, 12, 13, 14, 15, 17, 18, 22, 27, 28, 29], "system": [6, 7, 8, 9, 11, 12, 13, 14, 15, 22, 25, 26, 27, 28, 29], "go": 6, "repeatedli": 6, "should": [6, 7], "lu": [6, 9, 19, 21, 25, 27], "decomposit": [6, 9, 16, 19, 21, 25, 27], "forward": [6, 29], "backward": [6, 29], "substitut": [6, 14, 29], "rrr": [6, 8, 22, 23, 27, 28], "phantom": [6, 8, 23, 27, 28], "choleski": 6, "17": [6, 19, 27], "49": 6, "13": [6, 28], "26": 6, "our": [6, 10, 11, 13, 29], "00": [6, 19, 27], "53": 6, "35": 6, "12": [6, 8, 10, 16, 18, 20, 24, 27], "06": 6, "05": 6, "50": [6, 19, 27], "42": [6, 27], "000": 6, "532": 6, "347": 6, "12061476": 6, "adjac": 6, "direct": [6, 8, 17, 25], "graph": 6, "rank": [6, 8, 18, 21, 22, 23, 24, 28], "import": [6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "vertex": 6, "g": 6, "vertic": [6, 8, 17], "a_": [6, 14, 19, 26, 28, 29], "j": [6, 7, 8, 11, 19, 21, 22, 23, 26, 27, 28], "edg": 6, "collect": [6, 18, 21, 27, 28], "webpag": 6, "link": 6, "anoth": [6, 28], "count": 6, "maximum": [6, 8, 26], "itself": [6, 21], "stochast": 6, "process": [6, 28], "click": 6, "p_": [6, 23, 27], "total": [6, 25], "probabl": 6, "construct": [6, 7, 9, 13, 15, 23, 24, 27, 28], "googl": 6, "teleport": 6, "paramet": [6, 22], "1s": [6, 8], "everi": [6, 7, 16, 21, 28], "beyond": [6, 27], "web": 6, "between": [6, 8, 21, 27], "usual": [6, 19, 21], "chosen": [6, 8, 29], "transit": 6, "do": [6, 8, 11, 15, 17, 22, 25, 26, 27], "either": [6, 8, 21], "visit": 6, "webapg": 6, "accord": [6, 8], "85": 6, "There": [6, 7, 8, 15, 16, 21, 22, 23, 27, 28, 29], "exist": [6, 7, 8, 11, 12, 22, 24, 25, 27, 28], "uniqu": [6, 7, 12, 15, 21, 22, 23, 27, 28], "steadi": 6, "state": [6, 22, 26], "x_i": [6, 28], "search": 6, "list": [6, 28], "contain": [6, 8, 18, 21, 25], "hundr": 6, "million": 6, "huge": [6, 18], "But": [6, 12], "founder": 6, "well": 6, "enough": [6, 7, 29], "after": [6, 18, 28], "about": [6, 10, 27], "top": [6, 8, 28], "abov": [6, 8, 28, 29], "15": [6, 10, 11, 12, 13, 17, 20, 27], "0375": 6, "4625": 6, "3208": 6, "8875": 6, "2472": 6, "4681": 6, "most": [6, 8, 15, 16, 22, 24, 26, 27, 29], "recurs": 6, "largest": [6, 8, 18], "absolut": [6, 8, 19], "make": [6, 8], "prevent": 6, "becom": 6, "too": 6, "small": [6, 7, 8, 12, 13, 26, 29], "produc": [6, 8, 19, 29], "more": [6, 8, 21, 22, 27, 29], "accur": 6, "necessari": 6, "section": [6, 7, 8, 27, 29], "As": 6, "happen": [6, 12], "complet": 6, "exclud": 6, "diagonaliz": [7, 8], "linearli": [7, 17, 22, 25], "independ": [7, 22], "symmetr": [7, 8, 19, 21, 24], "distinct": [7, 27], "some": [7, 10, 11, 12, 15, 17, 22, 23], "nonzero": [7, 8, 11, 21, 23, 25, 28], "impli": [7, 8, 22, 24, 25, 26, 27, 28, 29], "invert": [7, 8, 18, 19, 27], "det": [7, 8, 26, 27, 28], "suggest": 7, "solut": [7, 8, 9, 10, 11, 12, 14, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29], "work": [7, 8, 9, 11, 15, 28], "done": 7, "cours": 7, "impract": 7, "equat": [7, 8, 9, 12, 14, 21, 27, 28], "degre": [7, 12, 15, 21, 27, 29], "ll": 7, "better": [7, 8, 29], "later": [7, 26], "xi": [7, 8], "d": [7, 12, 15, 16, 21, 26, 27, 28], "pd": 7, "pdp": 7, "ap": 7, "yield": [7, 12, 14, 27, 28, 29], "_i": [7, 8, 21, 23], "That": [7, 12, 16], "lambda_j": 7, "ne": [7, 25, 27], "fundament": 7, "factor": [7, 15, 28], "pm": 7, "prod_": [7, 27], "m_i": 7, "dimens": [7, 21, 27], "eigenspac": 7, "e_": [7, 28], "Not": [7, 28], "doe": [7, 11, 20, 22, 26, 27, 28, 29], "eiganvalu": 7, "aa": [7, 8, 21, 24], "subset": [7, 8, 21, 23, 25], "subspac": [7, 23, 24], "dim": [7, 21, 25], "c_p": 7, "h": [7, 14, 23, 29], "elementari": [7, 23, 24, 28, 29], "reflector": [7, 23, 24], "c_h": 7, "bab": 7, "lambda_3": 7, "ta": [8, 21, 22, 24], "both": [8, 17, 23, 24, 25, 29], "pd_1p": 8, "qd_2q": 8, "lead": [8, 25, 28], "sigma": [8, 16], "q": [8, 14, 16, 19, 22, 24, 29], "diagon": [8, 11, 17, 19, 21, 26, 27, 28], "eigenvalu": [8, 9], "d_1": [8, 26, 27], "d_2": [8, 26, 27], "throughout": 8, "non": 8, "neg": 8, "must": 8, "calcul": [8, 15], "unit": [8, 21, 23, 26, 28], "convers": 8, "similar": [8, 19, 28], "regard": 8, "relat": [8, 24], "label": 8, "lambda_r": 8, "sigma_i": 8, "final": [8, 21, 24, 27], "conclud": 8, "sigma_1": 8, "sigma_2": 8, "sigma_r": 8, "ccc": [8, 23], "hline": [8, 27], "orthonorm": [8, 16, 21, 23, 24], "15mm": 8, "_r": [8, 25], "_m": [8, 21, 23, 24, 25], "nullspac": [8, 21], "defin": [8, 13, 14, 19, 21, 26, 27, 29], "aq": 8, "chose": 8, "connect": 8, "inspect": 8, "extend": [8, 24], "setup": [8, 22, 27, 29], "rcr": 8, "span": [8, 21, 23, 24], "max_": [8, 26], "know": [8, 11, 12, 19, 21, 25], "sigma_n": 8, "cond": [8, 12, 13, 17, 26, 27], "view": 8, "row": [8, 11, 15, 16, 17, 18, 21, 24, 25, 28], "data": [8, 12, 13, 17, 18, 27], "mean": [8, 15, 16, 19, 22, 27], "w": [8, 16, 23, 24], "maxim": 8, "weight": [8, 16], "x_k": [8, 21, 26], "perp": [8, 21, 22, 23, 24], "_j": [8, 21, 23], "captur": [8, 16], "ie": [8, 13, 16, 28], "varianc": [8, 16], "_p": [8, 16, 26], "sigma_p": 8, "entir": [8, 25], "p_k": [8, 13, 14, 27, 29], "sigma_k": 8, "t_k": [8, 12, 13, 14, 27, 29], "obtain": [8, 28], "remov": 8, "sigma_": 8, "below": [8, 11, 26, 28], "expect": [8, 27], "rrrrrrr": [8, 27], "don": 8, "full": 8, "just": [8, 15, 28], "tx": 8, "24x": 8, "80": 8, "20": [8, 11, 15, 17, 19], "digit": [8, 9], "dataset": [8, 18], "sklearn": [8, 16], "1797": [8, 16], "64": [8, 16], "pixel": [8, 16], "handwritten": [8, 16], "10": [8, 10, 11, 12, 13, 15, 16, 18, 20, 25, 27, 29], "reshap": [8, 13, 16, 18], "like": 8, "color": 8, "3s": 8, "horizont": [8, 17], "interest": 8, "observ": [8, 26], "4s": 8, "opposit": 8, "7s": 8, "cong": 8, "c_m": [8, 25], "minimum": [8, 22, 26], "altogeth": 8, "i_r": 8, "p_r": 8, "want": [8, 13, 15, 22, 27], "multipli": [8, 28], "everyth": 8, "out": [8, 26], "p_rp_r": 8, "bq": 8, "outer": 8, "truncat": [8, 29], "a_k": [8, 14, 18, 19, 27, 29], "side": [8, 21, 29], "corrupt": 8, "nois": [8, 12, 13, 15, 18], "hat": [8, 10, 18], "directli": [8, 28], "compos": 8, "error": [8, 10, 15, 18, 22, 29], "unrel": 8, "sens": [8, 23, 26], "mostli": 8, "avoid": [8, 17, 18], "amplifi": 8, "strategi": [8, 21], "deblur": 8, "tomographi": 8, "next": [8, 11], "21": [8, 29], "14": [8, 10, 13, 27], "switch": 8, "chang": [8, 12, 13, 26, 27], "delta": [8, 26], "pseudo": 8, "a_2": [8, 14, 27, 29], "min": 8, "summar": [9, 21], "qr": 9, "svd": [9, 16], "perform": [9, 28], "mathemat": [9, 10], "softwar": [9, 24], "scipi": [9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 29], "jupyt": 9, "least": [9, 15], "iter": 9, "method": [9, 15, 19, 22, 27, 28], "analyz": 9, "under": [9, 25, 26], "creativ": 9, "common": [9, 15, 22], "attribut": 9, "noncommerci": 9, "sharealik": 9, "intern": 9, "numpi": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "la": [10, 11, 12, 13, 14, 15, 16, 17, 19, 20], "matplotlib": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "pyplot": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "creat": [10, 11, 12, 17, 25], "function": [10, 11, 13, 15, 16, 17, 19, 22, 24, 26, 29], "learn": [10, 16], "packag": [10, 16], "print": [10, 11, 12, 15, 19], "type": [10, 18, 28], "ndarrai": [10, 18], "16666667": 10, "33333333": 10, "66666667": [10, 19], "due": 10, "round": [10, 27], "exact": [10, 14, 29], "residu": [10, 22], "220446049250313e": 10, "16": [10, 19, 27, 29], "cccccccc": 10, "2r": 10, "constant": [10, 28], "model": 10, "parallel": 10, "circuilt": 10, "loop": 10, "current": 10, "i_1": 10, "i_n": 10, "a1": [10, 11], "ey": [10, 11], "a2": [10, 11], "diag": [10, 11, 14, 17, 18], "ones": [10, 11, 14, 15, 17, 28], "xlabel": [10, 12], "ylabel": 10, "amp": 10, "linalg": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 29], "partial": [11, 28], "pivot": [11, 28], "than": [11, 27], "own": 11, "return": 11, "warn": 11, "messag": 11, "def": 11, "copi": [11, 20], "track": 11, "rang": [11, 12, 16, 18, 19, 27], "check": [11, 17], "continu": [11, 13, 27], "remain": 11, "move": [11, 28, 29], "success": 11, "try": [11, 12], "along": [11, 28], "onemor": 11, "rrrrr": [11, 22, 27, 28, 29], "solve_triangular": 11, "imshow": [11, 16, 17, 18], "cmap": [11, 16, 17, 18], "rdbu": 11, "clim": [11, 16], "colorbar": [11, 16, 17], "lower": [11, 28], "grid": [11, 12, 13, 14, 16, 20], "ylim": 11, "60": [11, 27], "y_0": [12, 13, 15, 27, 29], "t_d": [12, 27], "y_d": [12, 27], "c_0": [12, 15, 22, 27], "c_d": [12, 15, 27], "y_k": [12, 13, 14, 21, 27, 29], "c_k": [12, 14, 27, 29], "unknown": [12, 27, 28, 29], "c_1t_1": [12, 27], "y_1": [12, 14, 15, 21, 22, 25, 27, 28, 29], "c_1t_2": 12, "t_2": [12, 22, 27], "y_2": [12, 14, 22, 25, 27, 28, 29], "c_1t_d": [12, 27], "vandermond": [12, 15, 27], "parabola": 12, "vander": 12, "cubic": 12, "polyniomi": 12, "linspac": [12, 13, 14, 15], "markers": [12, 13], "condit": [12, 14, 17, 24, 25, 27, 29], "nmax": 12, "11": [12, 25, 27, 29], "append": 12, "figur": [12, 16, 17, 18, 20], "figsiz": [12, 16, 18, 20], "titl": [12, 20], "115575244": 12, "6289977": 12, "around": [12, 27], "len": 12, "nice": 12, "introduc": [12, 14, 29], "005": [12, 13], "randn": [12, 13, 15, 16, 17, 19], "200": [12, 13, 16, 17, 18], "sensit": [12, 13, 26, 27], "cubicsplin": 13, "y_n": [13, 14, 15, 21, 27, 28, 29], "piecewis": [13, 27], "p_1": [13, 14, 23, 27, 29], "p_2": [13, 23, 27], "p_n": [13, 14, 27, 29], "subinterv": [13, 27], "smooth": [13, 29], "530258040767446": 13, "compar": [13, 14, 18, 19, 26, 27], "t1": 13, "y1": 13, "cs1": 13, "bc_type": 13, "t2": 13, "y2": 13, "randint": [13, 18], "cs2": 13, "ad": 13, "t3": 13, "y3": 13, "cs3": 13, "differenti": 14, "boundari": [14, 29], "t_f": [14, 29], "kh": [14, 29], "rearrang": [14, 26, 28, 29], "llet": 14, "r_k": [14, 19, 29], "rrcrr": [14, 29], "r_1": [14, 15, 22, 24, 29], "r_2": [14, 29], "r_": [14, 29], "r_n": [14, 29], "t0": 14, "tf": 14, "repeat": [14, 19], "concaten": 14, "axi": [14, 16], "none": 14, "ordinari": [14, 29], "b_k": [14, 27, 29], "2q_k": [14, 29], "b_1": [14, 27, 28, 29], "b_2": [14, 27, 28, 29], "b_": [14, 29], "c_": [14, 27, 28, 29], "a_n": [14, 27, 29], "b_n": [14, 27, 28, 29], "2y": [14, 29], "19": [14, 19, 27, 29], "line": [15, 21, 22, 25], "c_1t": [15, 29], "best": [15, 22], "quantifi": [15, 22, 26], "minim": [15, 22], "sse": [15, 22], "sum_i": [15, 22], "y_i": [15, 22], "t_i": [15, 22, 27], "express": [15, 25], "vert": [15, 22], "q_1r_1": [15, 24], "thin": [15, 22, 24], "upper": [15, 19, 24, 28], "triangular": [15, 19, 24, 28], "q_1": [15, 22, 24], "build": 15, "base": [15, 24], "epsilon": 15, "arbitrari": 15, "choic": [15, 27], "goal": 15, "demonstr": 15, "retriev": 15, "coefficeint": 15, "c0": 15, "c1": 15, "500": [15, 20], "scatter": [15, 16], "lw": [15, 16], "column_stack": [15, 16], "correct": 15, "64835034": 15, "19419242": 15, "78607232": 15, "51940935": 15, "72293165": 15, "02789431": 15, "03227316": 15, "almost": 15, "exactli": [15, 29], "ts": 15, "ys": 15, "linewidth": 15, "idea": 15, "c_2t": [15, 22], "c_dt": 15, "befor": 15, "cd_d": 15, "c_1x": 15, "c_2x": 15, "c2": 15, "1000": 15, "q1": 15, "r1": 15, "mode": 15, "econom": 15, "averag": 16, "locat": [16, 28], "origin": [16, 21, 25], "seek": 16, "singular": [16, 18, 26], "qt": [16, 18], "86714106": 16, "49806262": 16, "quiver": 16, "xy": 16, "scale_unit": 16, "scale": [16, 28], "machin": 16, "implement": [16, 19], "pca": 16, "includ": [16, 22, 25], "load_digit": 16, "been": 16, "flatten": 16, "select": 16, "1056": 16, "binari": [16, 17], "interpol": 16, "gaussian": 16, "normliz": 16, "x2d": 16, "target": 16, "cm": 16, "get_cmap": 16, "jet": 16, "tick": 16, "io": [17, 18], "loadmat": [17, 18], "set_cmap": 17, "640x480": 17, "ax": 17, "a_c": 17, "a_r": 17, "256": 17, "o": 17, "block": [17, 19], "arang": [17, 20], "ac": 17, "24782": 17, "331042560716": 17, "record": [17, 28], "how": [17, 25, 26, 28, 29], "kitten": 17, "imread": 17, "jpg": 17, "astyp": 17, "float64": 17, "grai": 17, "01": [17, 19], "x1": 17, "x2": 17, "pseudoinvers": [17, 18], "pc": 17, "sc": 17, "qtc": 17, "pr": 17, "sr": 17, "qtr": 17, "dc_k_plu": 17, "hstack": 17, "dr_k_plu": 17, "ac_k_plu": 17, "ar_k_plu": 17, "spars": 18, "sla": 18, "tomograph": 18, "rai": 18, "walnut": 18, "wa": 18, "prepar": 18, "finnish": 18, "problem": [18, 22, 26], "societi": 18, "ct": 18, "mat": 18, "file": 18, "These": 18, "through": [18, 21, 24, 25, 28], "save": 18, "memori": 18, "nbyte": 18, "7762752": 18, "9840": 18, "6724": 18, "csc": 18, "csc_matrix": 18, "subplot": [18, 20], "proj": [18, 22, 23, 24], "82": 18, "spy": 18, "120": 18, "78720": 18, "b_e": 18, "a_k_plu": 18, "bone": 18, "provid": [18, 24, 27], "fip": 18, "eignvalu": 19, "paus": 19, "x0": 19, "niter": 19, "nxk": 19, "format": 19, "xk": 19, "sleep": 19, "72413793": 19, "68965517": 19, "70710681": 19, "70710675": 19, "rayleigh": 19, "quotient": 19, "41421356": 19, "eig": 19, "eval": 19, "evec": 19, "00000000e": 19, "07106781e": 19, "91354351e": 19, "inde": 19, "tild": 19, "lu_factor": 19, "lu_solv": 19, "50000002": 19, "70710678": 19, "49999998": 19, "tb": 19, "150": 19, "375": 19, "75262486612826": 19, "376": 19, "1225114616083": 19, "pretti": 19, "good": 19, "a_0": 19, "q_k": [19, 29], "thei": [19, 21, 24], "na": 19, "ak": 19, "nak": 19, "02930727e": 19, "33333333e": 19, "20655176e": 19, "40000000e": 19, "41421356e": 19, "07336995e": 19, "41176471e": 19, "88235294e": 19, "02": 19, "50505098e": 19, "11764706e": 19, "41379310e": 19, "43829925e": 19, "24955710e": 19, "13793103e": 19, "77213497e": 19, "29396765e": 19, "45293347e": 19, "23531192e": 19, "14213562e": 19, "ipython": 20, "displai": 20, "rcparam": 20, "default": 20, "y_angl": 20, "1e": 20, "phase": 20, "k1": 20, "k2": 20, "750": 20, "k3": 20, "1100": 20, "rate": 20, "your": 20, "browser": 20, "support": 20, "element": 20, "y_filter": 20, "x_filter": 20, "ifft": 20, "x_1y_1": 21, "x_ny_n": 21, "variou": 21, "rule": 21, "furthermor": [21, 23, 28], "acut": 21, "radian": 21, "90": 21, "pythagorean": 21, "theorem": [21, 22], "subseteq": [21, 23, 25], "u_2": 21, "plane": [21, 25], "Is": [21, 25, 26], "possibl": [21, 29], "No": 21, "cap": 21, "replac": 21, "suffici": 21, "revers": 21, "nulliti": 21, "l_1": [21, 27], "l_2": [21, 27], "rrrrrr": [21, 27], "distanc": [22, 23], "nearest": [22, 23], "nonsingular": [22, 26], "decomopsit": 22, "futhermor": 22, "q_2": [22, 24], "deomposit": 22, "pythagora": 22, "depend": [22, 27], "t_m": 22, "y_m": 22, "regress": 22, "t_j": [22, 27], "simpl": [22, 29], "f_1": 22, "sai": 22, "necessarili": 22, "case": [22, 27, 29], "f_2": 22, "_u": 23, "gram": 23, "schmidt": 23, "projector": [23, 24], "complement": [23, 24], "could": 23, "closest": 23, "p_1p_2": 23, "p_2p_1": 23, "shortest": 23, "rotat": 24, "reflect": 24, "thing": 24, "2p": 24, "matlab": 24, "document": 24, "lapack": 24, "hyperplan": 25, "close": 25, "addit": 25, "scalar": [25, 28], "singl": 25, "long": 25, "colinear": 25, "u_m": 25, "trivial": 25, "sometim": 25, "echelon": [25, 28], "abc": 25, "euclidean": 26, "assign": [26, 28], "turn": 26, "mani": [26, 27, 28, 29], "triangl": 26, "inequ": 26, "familiar": 26, "ball": 26, "unless": 26, "explicitli": 26, "frobeniu": 26, "_f": 26, "oper": [26, 28], "satisi": 26, "min_": 26, "stretch": 26, "reciproc": 26, "max_i": 26, "d_i": 26, "clear": 26, "nontrivi": 26, "convent": 26, "circl": 26, "bound": 26, "infinit": [27, 28], "wherea": 27, "much": [27, 29], "flexibl": 27, "impos": [27, 29], "constraint": 27, "ensur": 27, "meaning": 27, "_d": 27, "fix": 27, "phi_k": 27, "phi_0": 27, "phi_d": 27, "monomi": 27, "c_1t_0": 27, "27": 27, "20mm": [27, 28], "reus": 27, "3t": 27, "4t": 27, "larger": 27, "d_k": 27, "four": 27, "4n": 27, "specifi": [27, 29], "endpoint": [27, 29], "y_": [27, 28, 29], "natur": 27, "knot": 27, "l_": 27, "l_k": 27, "3l": 27, "2l": 27, "6l": 27, "l_n": 27, "6l_n": 27, "a_4": 27, "b_4": 27, "c_4": 27, "thefor": 27, "d_": 27, "3a_k": 27, "2b_k": 27, "6a_k": 27, "2b_": 27, "6a_3": 27, "2b_3": 27, "2b_4": 27, "3a_3": 27, "c_3": 27, "6a_4": 27, "2b_5": 27, "li": 27, "t_3": 27, "p_3": 27, "drastic": 27, "30": 27, "33": 27, "y_3": [27, 28, 29], "b_3": 27, "unspecifi": 27, "decim": 27, "place": 27, "93": 27, "55": 27, "56": 27, "65": 27, "37": 27, "24": [27, 28, 29], "69": 27, "b_5": 27, "18": [27, 29], "c_5": 27, "36": 27, "78": 27, "d_5": 27, "t_4": [27, 29], "t_5": 27, "t_6": 27, "t_7": 27, "subsitut": 28, "ccccccccc": 28, "b_m": 28, "b_i": 28, "known": 28, "variabl": 28, "three": 28, "interchang": 28, "bottom": 28, "symbol": 28, "review": 28, "inconsist": 28, "augment": 28, "free": 28, "ea": 28, "dure": 28, "pair": 28, "shown": 28, "allow": 28, "plu": 28, "permut": 28, "advantag": 28, "ell_": 28, "especi": 28, "ae": 28, "l_0u_0": 28, "l_0": 28, "deriv": [28, 29], "ld": 28, "du_0": 28, "imposs": 29, "involv": 29, "highest": 29, "appear": 29, "taylor": 29, "center": 29, "central": 29, "2h": 29, "2y_k": 29, "rrrrrrcrrrrcc": 29, "2y_1": 29, "2y_2": 29, "2y_3": 29, "y_4": 29, "r_3": 29, "2y_": 29, "2y_n": 29, "formul": 29, "08": 29, "integr": 29, "twice": 29, "notic": 29, "found": 29, "y_5": 29, "principl": 29, "higher": 29, "accuraci": 29, "rrrrcrrrrcc": 29, "a_ny_": 29, "b_ny_n": 29, "rrrrrrcrrrrrrcc": 29, "never": 29, "19554177": 29, "35872678": 29, "ty": 29, "hint": 29}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"matrix": [0, 18, 26], "multipl": 0, "complex": 1, "vector": [1, 21, 23, 26], "convolut": 2, "filter": [2, 20], "discret": [3, 20], "fourier": [3, 4, 20], "transform": [3, 4, 20], "root": 3, "uniti": 3, "basi": [3, 25], "exercis": [3, 4, 5, 6, 7, 8, 21, 22, 23, 24, 25, 26, 27, 28, 29], "fast": 4, "frequenc": 5, "amplitud": 5, "phase": 5, "sinusoid": [5, 20], "dft": 5, "stemplot": 5, "comput": [6, 18, 19, 20], "eigenvalu": [6, 7, 19], "power": [6, 19], "method": [6, 14, 29], "rayleigh": 6, "quotient": 6, "invers": [6, 19], "iter": [6, 19], "pagerank": 6, "diagon": 7, "eigenvector": 7, "spectral": 7, "theorem": [7, 23, 25], "singular": 8, "valu": 8, "decomposit": [8, 11, 15, 24, 28], "svd": [8, 17, 18], "construct": 8, "corollari": 8, "princip": [8, 16], "compon": [8, 16], "analysi": [8, 16, 26], "pseudoinvers": 8, "least": [8, 22], "squar": [8, 22], "expans": 8, "math": 9, "307": 9, "appli": 9, "linear": [9, 10, 15, 25], "algebra": 9, "learn": 9, "goal": 9, "licens": 9, "system": 10, "equat": [10, 15, 22, 29], "exampl": [10, 11, 12, 13, 14, 15, 20], "solv": 10, "A": [10, 18], "mathbf": 10, "x": 10, "b": 10, "scipi": 10, "linalg": 10, "resistor": 10, "network": 10, "lu": [11, 28], "implement": 11, "polynomi": [12, 15, 27], "interpol": [12, 13, 27], "1": [12, 13, 14], "2": [12, 13, 14], "3": [12, 13, 14], "4": 12, "natur": 13, "cubic": [13, 27], "spline": [13, 27], "finit": [14, 29], "differ": [14, 29], "fit": [15, 22], "model": [15, 22], "data": [15, 16, 22], "regress": 15, "normal": [15, 22], "qr": [15, 19, 22, 24], "fake": [15, 16], "noisi": 15, "quadrat": 15, "2d": 16, "digit": 16, "dataset": 16, "deblur": 17, "imag": 17, "blur": 17, "toeplitz": 17, "matric": [17, 19, 24], "invert": 17, "nois": 17, "truncat": [17, 18], "tomographi": 18, "measur": 18, "sinogram": 18, "project": [18, 23, 24], "solut": 18, "true": 18, "random": 19, "fft": 20, "plai": 20, "audio": 20, "signal": 20, "orthogon": [21, 23, 24], "complement": 21, "subspac": [21, 25], "fundament": 21, "approxim": 22, "definit": 22, "onto": 23, "base": 23, "subpsac": 23, "gram": 24, "schmidt": 24, "independ": 25, "span": 25, "dimens": 25, "nullspac": 25, "rang": 25, "rank": 25, "nulliti": 25, "error": 26, "norm": 26, "condit": 26, "number": 26, "rel": 26, "function": 27, "gaussian": 28, "elimin": 28, "forward": 28, "backward": 28, "substitut": 28, "differenti": 29, "second": 29, "order": 29}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})