using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using System;

namespace EttoreJuninense
{
    public class FollowupPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            string clima = "soleado";
            context.OutputParameters["clima"] = clima;    
            }
            catch (System.Exception ex)
            {
                throw new InvalidPluginExecutionException("Ha ocurrido un error ", ex);
            }
        }
    }
}