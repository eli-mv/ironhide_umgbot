import pandas as pd
import numpy as np
from sklearn.neural_network import MLPRegressor

datos=pd.read_csv("bateria.csv")
x=datos["Tiempo"]
y=datos["Carga"]

#print(x)
#print(y)

#X=np.asarray(x, dtype="float")

X=np.array([x]).reshape(-1, 1)

#print(X)

from sklearn.model_selection import train_test_split 
X_train, X_test, y_train, y_test = train_test_split(X,y)

mlr=MLPRegressor(solver='lbfgs',alpha=1e-5,hidden_layer_sizes=(3,3), random_state=1)
mlr.fit(X_train,y_train)
print(mlr.score(X_train,y_train))
print("prediccion en t=20 minutos ", mlr.predict(20))
