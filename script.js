
        var aluno = {
            nome:"",
            idade:0,
            matricula:0,
            endereco:"",
            curso:"",
            hora:"",

            cadastrar: function(form){
                this.nome = form.nome.value;
                this.idade = form.idade.value;
                this.matricula = form.matricula.value;
                this.endereco = form.endereco.value;
                this.curso = form.curso.value;
                this.turno = form.hora.value;
            }
        }

        function validar(form) {
        
              var s = form.nome.value;
        
              var s2 = form.idade.value;

              var s3 = form.matricula.value;

              var s4 = form.endereco.value;

              var s5 = form.curso.value;

              var s6 = form.hora.value;
        
              if ( (s.length < 5) || (s2.length < 1) || (s3.length < 5) || (s4.length < 10) ) {
        
                   window.alert("preencha corretamente o seu Nome, Idade, Matricula e Endereço");
        
                   return(false);
        
              } else {
        
                 if (form.hora[0].checked != true && form.hora[1].checked != true &&
        
                    form.hora[2].checked != true ) {
        
                    window.alert("Escolha o turno!");
        
                    return(false);
        
                }
            }
                if (Formu.curso.selectedIndex == 0) {
                    window.alert("Informe o curso!");
                    return(false);
                }

            }