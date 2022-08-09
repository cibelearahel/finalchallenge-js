
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
                this.hora = form.hora.value;
            }
        }

        function saveTextAsFile()
        {
        var textToSave = document.getElementById('aluno.nome', 'aluno.idade', 'aluno.matricula','aluno.endereco', 'aluno.curso', 'aluno.hora').value;
        var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
        var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        downloadLink.click();
        }

        function destroyClickedElement(event)
        {
        document.body.removeChild(event.target);
        }

        function loadFileAsText()
        {
        var fileToLoad = document.getElementById("fileToLoad").files[0];

        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent)
        {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
        };
        fileReader.readAsText(fileToLoad, "UTF-8");
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
        
        
            
        