/**
 * External dependencie
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import { createBlock, BlockEdit } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './style.scss';

function BlockPreview( { name, attributes } ) {
	const block = createBlock( name, attributes );

	return (
		<div className="editor-block-preview">
			<div className="editor-block-preview__title">Preview</div>
			<div className="editor-block-preview__content">
				<BlockEdit
					name={ name }
					focus={ false }
					attributes={ block.attributes }
					setAttributes={ noop }
				/>
			</div>
		</div>
	);
}

export default BlockPreview;
