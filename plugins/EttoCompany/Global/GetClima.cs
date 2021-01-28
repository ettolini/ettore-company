using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using System;

namespace EttoCompany.Global
{
    public class GetClima : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

                string clima = "soleado";
                context.OutputParameters["clima"] = clima;
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException("Ha ocurrido un error ", ex);
            }
        }
    }
}