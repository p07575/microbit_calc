calc = [8+6,12-8,4*6,16/4,5/2]
num = ["8+6","12-8","4*6","16/4","5/2"]
for ans in calc:
    for word in num:
        basic.show_string(word+"="+str(ans),150)