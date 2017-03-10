// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteFormatFont, RteFormatText, RteFormatColor, RteFormatBody, RteAlignText, RteInsertContent, RteTextarea, RteClearFormatting } from 'ui/components/rich-text-editor/flavors/base/index.react.example';
import { Tooltip } from 'ui/components/tooltips/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'focused',
    label: 'Focused',
    element:
      <Demo>
        <RichTextEditor className="slds-has-focus">
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'filled-out',
    label: 'Filled Out',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Demo>
        <RichTextEditor className="slds-has-error">
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." aria-describedby="rte-error-01" />
          <div id="rte-error-01" className="slds-form-element__help slds-p-around--small">This field is required</div>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar disabledButtons disabledLabel="disabled">
            <RteFormatFont disabledButtons />
            <RteFormatText tabIndexSetting="-1" disabledButtons />
            <RteFormatColor disabledButtons />
            <RteFormatBody disabledButtons />
            <RteAlignText disabledButtons />
            <RteInsertContent disabledButtons />
            <RteClearFormatting disabledButtons />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." disabled />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" hasTooltip />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea />

          <Tooltip className="slds-nubbin--top-left" id="bold" style={{position: 'absolute', top: '48px', left: '149px'}}>
            Bold <kbd>cmd+b</kbd>
          </Tooltip>
        </RichTextEditor>
      </Demo>
  }
];
