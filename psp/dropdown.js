function getSubChannel(){

            var list1 = document.getElementById('channel');
            var list2 = document.getElementById('subchannel');
            var list1SelectedValue = list1.options[list1.selectedIndex].value;

            if (list1SelectedValue=='001')
            {
                list2.options.length=0;

                list2.options[1] = new Option('AFFILIATE', '01');
            }
            

            else if (list1SelectedValue=='004')
            {

                list2.options.length=0;

                list2.options[1] = new Option('CINEMA', '01');


            }



            else if (list1SelectedValue=='007')
            {

                list2.options.length=0;
                list2.options[2] = new Option('CRM', '01');

             
                
            }

      
            else if (list1SelectedValue=='009')
            {

                list2.options.length=0;

                list2.options[2] = new Option('CONSUMER', '02');
                list2.options[3] = new Option('PARTNER', '03');
           


            }

            else if (list1SelectedValue=='010')
            {

                list2.options.length=0;

                list2.options[2] = new Option('B2B', '01');
                list2.options[3] = new Option('B2C', '02');
                list2.options[4] = new Option('RETAIL', '03');


            }

            else if (list1SelectedValue=='011')
            {

                list2.options.length=0;

                list2.options[1] = new Option('INFLUENCEUR COLLABORATION', '01');
                list2.options[2] = new Option('PRODUCTION', '02');


            }

            else if (list1SelectedValue=='015')
            {

                list2.options.length=0;

                list2.options[1] = new Option('MARKET RESEARCH', '01');


            }

            else if (list1SelectedValue=='016')
            {

                list2.options.length=0;

                list2.options[3] = new Option('MEDIA COLLABORATION', '01');

            }

       
            else if (list1SelectedValue=='018')
            {

                list2.options.length=0;

                list2.options[1] = new Option('PROGRAMMATIC', '02');
                list2.options[2] = new Option('REACH VIDEOS', '04');
                list2.options[3] = new Option('DIRECT DEALS', '05');
        

            }


            else if (list1SelectedValue=='020')
            {

                list2.options.length=0;


                list2.options[2] = new Option('CLASSIC', '02');
                list2.options[3] = new Option('DIGITAL', '03');
                list2.options[4] = new Option('SPECIALS', '04');
            }

            else if (list1SelectedValue=='022')
            {

                list2.options.length=0;

                list2.options[1] = new Option('PR', '01');
            }

            else if (list1SelectedValue=='023')
            {

                list2.options.length=0;

                list2.options[1] = new Option('PRINT', '01');
            }

            else if (list1SelectedValue=='024')
            {

                list2.options.length=0;

                list2.options[1] = new Option('CAMPAIGNS', '01');
                list2.options[2] = new Option('SOCIAL MEDIA', '02');
                list2.options[3] = new Option('CONTENT', '03');
                list2.options[4] = new Option('zSTUDIOS', '04');
                list2.options[5] = new Option('MARKETS LOCAL', '05');

            }

            else if (list1SelectedValue=='025')
            {

                list2.options.length=0;

                list2.options[1] = new Option('RADIO', '01');
            }


            else if (list1SelectedValue=='027')
            {

                list2.options.length=0;

                list2.options[1] = new Option('SEO', '02');       
            }

            else if (list1SelectedValue=='028')
            {

                list2.options.length=0;

                list2.options[1] = new Option('REACH (PERSONALIZED MARKETING)', '01');
                list2.options[2] = new Option('RETARGET (PERSONALIZED MARKETING', '03');
                list2.options[3] = new Option('PUSH (MARKETS)', '04');


            }

            else if (list1SelectedValue=='029')
            {

                list2.options.length=0;

                list2.options[2] = new Option('GLOBAL', '02');
                list2.options[3] = new Option('LOCAL', '03');

            }
            
             else if (list1SelectedValue=='026')
            {

                list2.options.length=0;

                list2.options[2] = new Option('BRAND (PERSONALIZED MARKETING)', '01');
                list2.options[3] = new Option('REACH (PERSONALIZED MARKETING)', '04');
                list2.options[4] = new Option('NON-BRAND (PERSONALIZED MARKETING)', '03');


            }


            else if (list1SelectedValue=='032')
            {

                list2.options.length=0;

                list2.options[2] = new Option('CLASSIC', '02');
                list2.options[3] = new Option('DIGITAL', '03');
                list2.options[4] = new Option('SPONSORED', '04');

            }


}
