// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';
/**
 * Adds the SocialSerive component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'SocialSerivices',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'CopyRight_Text', type: CommonFieldTypes.SingleLineText },
      {
        name: 'Services',
        type: 'MultiList',
        source: `datasource=/sitecore/content/${packageJson.config.appName}/content/Services/ServicesListField`,
      },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
