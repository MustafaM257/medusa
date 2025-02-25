/**
 * @schema AdminPostReturnsReqSchema
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPostReturnsReqSchema
 * required:
 *   - order_id
 *   - items
 *   - return_shipping
 *   - internal_note
 *   - location_id
 * properties:
 *   order_id:
 *     type: string
 *     title: order_id
 *     description: The return's order id.
 *   items:
 *     type: array
 *     description: The return's items.
 *     items:
 *       type: object
 *       description: The item's items.
 *       required:
 *         - id
 *         - quantity
 *         - reason_id
 *         - note
 *       properties:
 *         id:
 *           type: string
 *           title: id
 *           description: The item's ID.
 *         quantity:
 *           type: number
 *           title: quantity
 *           description: The item's quantity.
 *         reason_id:
 *           type: string
 *           title: reason_id
 *           description: The item's reason id.
 *         note:
 *           type: string
 *           title: note
 *           description: The item's note.
 *   return_shipping:
 *     type: object
 *     description: The return's return shipping.
 *     required:
 *       - option_id
 *     properties:
 *       option_id:
 *         type: string
 *         title: option_id
 *         description: The return shipping's option id.
 *       price:
 *         type: number
 *         title: price
 *         description: The return shipping's price.
 *   internal_note:
 *     type: string
 *     title: internal_note
 *     description: The return's internal note.
 *   receive_now:
 *     type: boolean
 *     title: receive_now
 *     description: The return's receive now.
 *   refund_amount:
 *     type: number
 *     title: refund_amount
 *     description: The return's refund amount.
 *   location_id:
 *     type: string
 *     title: location_id
 *     description: The return's location id.
 * 
*/

