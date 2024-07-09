export default function TableAboutPage() {
  return (
    <div>
      <SectionDiv title=''>
        <TagDiv tag='Status' value={''} />
        <TagDiv tag='Region' value={''} />
        <TagDiv tag='Class' value={''} />
        <TagDiv tag='Billing Type' value={''} />
        <TagDiv tag='Date Created' value={''} />
      </SectionDiv>

      <SectionDiv title='Table Details'>
        <TagDiv tag='Table ID' value={''} />
        <TagDiv tag='Table ARN' value={''} />
        <TagDiv tag='Total Items' value={''} />
        <TagDiv tag='Total Size' value={''} />
        <TagDiv tag='Time To Live' value={''} />
        <TagDiv tag='' value={''} />
        <TagDiv tag='Partition Key' value={''} />
        <TagDiv tag='Sort Key' value={''} />
        <TagDiv tag='Replicas' value={''} />
        <TagDiv tag='Tags' value={''} />
        <TagDiv tag='Limits: Max Reads' value={''} />
        <TagDiv tag='Limits: Max Writes' value={''} />
      </SectionDiv>

      <SectionDiv title='Indices'>
        <TagDiv tag='Status' value={''} />
        <TagDiv tag='Name' value={''} />
        <TagDiv tag='Capacity' value={'On-Demand R&W'} />
        <TagDiv tag='Type' value={'LSI'} />
        <TagDiv tag='Total Size' value={''} />
        <TagDiv tag='Item Count' value={''} />
        <TagDiv tag='Primary Key' value={''} />
        <TagDiv tag='Sort Key' value={''} />
        <TagDiv tag='Projection' value={''} />
        <TagDiv tag='Max. RRUs' value={''} />
        <TagDiv tag='Max. WRUs' value={''} />
        {/* Fragmentation? */}
      </SectionDiv>

      <SectionDiv title='Stream'>
        <TagDiv tag='Kinesis Stream' value={''} />
        <TagDiv tag='DynamoDB Stream' value={''} />
      </SectionDiv>

      <SectionDiv title='Data Security'>
        {/* Data Breach */}
        <TagDiv tag='Encryption' value={''} />
        <TagDiv tag='Delete Protection' value={''} />
        <TagDiv tag='Permissions' value={''} />
      </SectionDiv>

      <SectionDiv title='Data Recovery'>
        {/* Disaster Management */}
        <TagDiv tag='Backup' value={'0'} />
        <TagDiv tag='PITR' value={'ON (Earlist: (date) | Latest: (date))'} />
      </SectionDiv>

      {/* Exports & Improts */}
    </div>
  )
}

function SectionDiv({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      {title && (
        <h4 className='mb-2 mt-12 text-lg font-medium text-neutral-100'>
          {title}
        </h4>
      )}

      <div className='flex flex-row flex-wrap gap-x-24 gap-y-6'>{children}</div>
    </div>
  )
}

function TagDiv({ tag, value }: { tag: string; value: string }) {
  return (
    <div>
      <div className='text-neutral-400'>{tag}</div>
      <div className='text-sm text-neutral-500'>{value}</div>
    </div>
  )
}
