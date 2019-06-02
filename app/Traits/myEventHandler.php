<?php

namespace DurianSoftware\Traits;

trait MyEventHandler
{
    protected function myEventHandler()
    {
        if ($this->auditEvent == 'view') {
            $this->auditEvent = 'retrieved';
        }

        $this->attributes['links']['self'] = $this->resolveUrl();
        
        return [$this->attributes, []];
    }
}
