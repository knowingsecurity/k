    <script language="JavaScript">
                          /* show file value after file select */
                             $('.custom-file-input').on('change', function() { 
                             let fileName = $(this).val().split('\\').pop(); 
                             $(this).next('.custom-file-label').addClass("selected").html(fileName); 
                              });
                      </script>                    
                     